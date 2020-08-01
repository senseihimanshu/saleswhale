import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentUser: any;
  teams: Array<any> = [];
  filteredTeams: Array<any> = [];
  listType: 'all' | 'favorited' | 'archived' = 'all';

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.appService.getTeams().subscribe(res => {
      console.log(res);
      this.currentUser = res['current_user'];
      this.teams = res['teams'];

      this.route.paramMap.subscribe((params) => {
        if (!params.has('type')) return;
        if (params.get('type') === 'favorited' || params.get('type') === 'archived' || params.get('type') === 'all') {
          this.listType = params.get('type') as 'all' | 'favorited' | 'archived';
          console.log('here');
          console.log(this.listType);

          if (this.listType === 'favorited') {
            this.filteredTeams = this.teams.filter(team => {
              return team.is_favorited
            });
            console.log(this.filteredTeams);
            return;
          }

          if (this.listType === 'archived') {
            this.filteredTeams = this.teams.filter(team => {
              return team.is_archived;
            });
            console.log(this.filteredTeams);
            return;
          }

          this.filteredTeams = this.teams;
          console.log(this.filteredTeams);
        }
        else {
          this.router.navigateByUrl('/');
        }
      })
    });
  }

}
