import { Injectable } from '@angular/core';
import {IGroup} from "./igroup";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
groups: IGroup[] = [
  { id: 1,name: 'C022i01'},
  { id: 2,name: 'C023i02'},
  { id: 3,name: 'C024i03'},
  { id: 4,name: 'C025i04'}
];
  constructor() { }
  getAll(): IGroup[] {
    return this.groups;
  }
}
