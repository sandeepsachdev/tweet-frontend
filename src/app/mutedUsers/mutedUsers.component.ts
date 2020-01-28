import { Component, OnInit } from '@angular/core';
import {Tweet} from '../model/tweet';

@Component({
  selector: 'muted-users',
  templateUrl: './mutedUsers.component.html',
  styleUrls: ['./mutedUsers.component.css']
})
export class MutedUsers implements OnInit {
  filteredUsers: String[];

  ngOnInit() {

    if (localStorage.getItem('filteredUsers')) {
      this.filteredUsers = JSON.parse(localStorage.getItem('filteredUsers'));
    }
  }

}
