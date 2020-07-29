import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
keyword: string;
getInput(event) {
  this.keyword = event;
}
  constructor() { }

  ngOnInit(): void {
  }

}
