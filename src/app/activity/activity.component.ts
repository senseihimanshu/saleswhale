import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activities: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getActivities().subscribe(res => {
      console.log(res);
      this.activities = res['activities'];
    })
  }

}
