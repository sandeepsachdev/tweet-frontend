import { Component, OnInit } from '@angular/core';
import {Tweet} from '../model/tweet';

@Component({
  selector: 'muted-users',
  templateUrl: './mutedUsers.component.html',
  styleUrls: ['./mutedUsers.component.css']
})
export class MutedUsers implements OnInit {
  tweets: Tweet[];

  ngOnInit() {
  }
}
