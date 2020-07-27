import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";
import {readBaseClass} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  title_page: 'User';
  users: IUser[] ;
  // userFilter: IUser[];
  // userDelete: IUser[];

  constructor() {
  }

  ngOnInit(): void {
    this.users = this.setUserList();
    // this.userFilter = this.users;
    // this.userDelete = this.users;
  }

  setUserList(){
    let users = [
      {
        id: 1,
        name: 'Thuy',
        email: 'Thuy@gmail.com'
      },
      {
        id: 2,
        name: 'Hoang',
        email: 'Hoang@gmail.com'
      },
      {
        id: 3,
        name: 'Thanh',
        email: 'Thanh@gmail.com'
      }
    ];
    return users;
  }

  search(event) {
    const keyword = event.target.value;
    this.users = (keyword) ? this.filterByKeyword(keyword) : this.setUserList();
  }

  private filterByKeyword(keyword) {
    return this.users.filter(user => {
      // tslint:disable-next-line:triple-equals
      return user.name.indexOf(keyword) != -1;
    })
  }

  deleteUser(id: number) {
    let userDeleted = [];
    this.users.map(user => {
      if (user.id != id) {
        userDeleted.push(user);
      }
    });
    this.users = userDeleted;
  }
}
