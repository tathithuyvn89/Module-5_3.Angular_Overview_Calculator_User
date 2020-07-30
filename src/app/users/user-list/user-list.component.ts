import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";
import {readBaseClass} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";
import {IGroup} from "../../groups/igroup";
import {GroupService} from "../../groups/group.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  textInput='Day la giu leiu cua cha'
  title_page: 'User';
  totalRec : number;
  page: number = 1;
  users: IUser[] ;
  groups: IGroup[];
  constructor(private groupService: GroupService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.groups = this.groupService.getAll();
  }

  search(event) {
    const keyword = event;
    this.users = (keyword) ? this.filterByKeyword(keyword) : this.userService.getAll();
    this.totalRec=4;
  }

  private filterByKeyword(keyword) {
    return this.users.filter(user => {
      // tslint:disable-next-line:triple-equals
      return user.name.indexOf(keyword) != -1;
    })
  }

  deleteUser(id: number)  {
    this.users= this.userService.deleteUser(id);
  }

  editUser(id: number) {

  }
}
