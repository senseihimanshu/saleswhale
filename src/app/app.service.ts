import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    teamApi = 'assets/teams.json';

    constructor(private http: HttpClient) { }

    getTeams() {
        return this.http.get(this.teamApi);
    }
}