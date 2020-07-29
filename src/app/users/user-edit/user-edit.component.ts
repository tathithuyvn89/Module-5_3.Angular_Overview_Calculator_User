import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IGroup} from "../../groups/igroup";
import {GroupService} from "../../groups/group.service";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../IUser";
import get = Reflect.get;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
addUserForm : FormGroup;
user: IUser;
groups: IGroup[];
  constructor( private fb: FormBuilder,
               private route: ActivatedRoute,
               private groupService: GroupService,
               private userService: UserService,
               private router: Router) { }

  ngOnInit(): void {
    this.groups= this.groupService.getAll();
    const id = Number(this.route.snapshot.params['id']);
    this.user= this.userService.findUser(id);
    this.addUserForm = this.fb.group({
      id : [this.user.id,Validators.required],
      name: [this.user.name,Validators.required],
      email: [this.user.email,Validators.email],
      group_id: [this.user.group_id]
    });


  }

  submit() {
    let data = this.addUserForm.value;
    data.group_id = +data.group_id;
    this.userService.deleteUser(data.id);
    this.userService.addUser(data);
    this.router.navigate(['users']);
  }
}
