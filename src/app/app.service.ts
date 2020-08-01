import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    teamApi = 'assets/teams.json';
    activityApi = 'assets/activities.json';

    constructor(private http: HttpClient) { }

    getTeams() {
        return this.http.get(this.teamApi);
    }

    getActivities() {
        return this.http.get(this.activityApi);
    }
}