import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-activity-body',
  templateUrl: './activity-body.component.html',
  styleUrls: ['./activity-body.component.scss']
})
export class ActivityBodyComponent implements OnChanges {
  @Input()
  activity: any;

  statement: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.activity.currentValue) {
      if (this.activity.action === 'increased_quota') {
        this.statement = `<b>${this.activity.person.name}</b> increased <b>${this.activity.target}'s</b> quota.`;
      }

      if (this.activity.action === 'added_leads') {
        this.statement = `<b>${this.activity.person.name}</b> added new leads to <b>${this.activity.target}</b>.`;
      }

      if (this.activity.action === 'archived_team') {
        this.statement = `<b>${this.activity.person.name}</b> archived the team <b>${this.activity.target}</b>.`;
      }
    }
  }
}
