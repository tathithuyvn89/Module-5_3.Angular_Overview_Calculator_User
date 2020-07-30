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
  },
  {
    id: 4,
    name: 'Thanh',
    email: 'Thanh@gmail.com',
    group_id: 3
  },
  {
    id: 5,
    name: 'Thanh5',
    email: 'Thanh5@gmail.com',
    group_id: 3
  },
  {
    id: 6,
    name: 'Thanh6',
    email: 'Thanh6@gmail.com',
    group_id: 3
  },
  {
    id: 7,
    name: 'Thanh7',
    email: 'Thanh7@gmail.com',
    group_id: 2
  },
  {
    id: 8,
    name: 'Thanh8',
    email: 'Thanh8@gmail.com',
    group_id: 2
  },
  {
    id: 9,
    name: 'Thanh9',
    email: 'Thanh9@gmail.com',
    group_id: 3
  },
  {
    id: 10,
    name: 'Thanh10',
    email: 'Thanh10@gmail.com',
    group_id: 1
  },
  {
    id: 11,
    name: 'Thanh11',
    email: 'Thanh11@gmail.com',
    group_id: 1
  },
  {
    id: 12,
    name: 'Thanh12',
    email: 'Thanh12@gmail.com',
    group_id: 3
  },
  {
    id: 13,
    name: 'Thanh13',
    email: 'Thanh13@gmail.com',
    group_id: 2
  },
  {
    id: 14,
    name: 'Thanh14',
    email: 'Thanh14@gmail.com',
    group_id: 1
  },
  {
    id: 15,
    name: 'Thanh15',
    email: 'Thanh15@gmail.com',
    group_id: 1
  },
  {
    id: 16,
    name: 'Thanh16',
    email: 'Thanh16@gmail.com',
    group_id: 1
  },
  {
    id: 17,
    name: 'Thanh17',
    email: 'Thanh17@gmail.com',
    group_id: 1
  },
  {
    id: 18,
    name: 'Thanh18',
    email: 'Thanh18@gmail.com',
    group_id: 2
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
editUser(id:number,editUser: IUser) {
let index = this.users.indexOf(this.findUser(id));
this.users[index]=editUser;
}

  constructor() { }
}
