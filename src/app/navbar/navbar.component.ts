import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-navbar',
    styleUrls: ['navbar.component.scss'],
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    user: any;
    constructor(private appService: AppService) { }
    ngOnInit() {
        this.appService.getTeams().subscribe(res => {
            this.user = res['current_user'];
        });
    }
}