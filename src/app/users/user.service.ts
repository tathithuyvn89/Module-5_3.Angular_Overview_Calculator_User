import { Injectable } from '@angular/core';
import {IUser} from "./IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
users: IUser[] =[
  {
    id: 1,
    name: 'Thuy',
    email: 'Thuy@gmail.com',
    group_id: 1
  },
  {
    id: 2,
    name: 'Hoang',
    email: 'Hoang@gmail.com',
    group_id: 2
  },
  {
    id: 3,
    name: 'Thanh',
    email: 'Thanh@gmail.com',
    group_id: 1
  }
];
getAll(): IUser[] {
  return this.users;
}
addUser(newUser: IUser) {
  this.users.push(newUser);
}
findUser(id:number) {
 let findedUser: IUser;
 this.users.map(user =>{
   if (user.id==id){
     findedUser= user
   }
 });
  return findedUser;
}
deleteUser(id:number){
  let userDeleted= [];
  this.users.map(user => {
    if (user.id != id) {
      userDeleted.push(user);
    }
  });
  return userDeleted;

}
  constructor() { }
}
