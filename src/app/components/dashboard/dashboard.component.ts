import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  checkstatus!: boolean;

  public localStorageItem(): boolean {
    if (localStorage.getItem('admin') === 'true') {
      return true
    } else {
      return false;
    };
  }

  constructor() { }

  ngOnInit(): void {
    this.checkstatus = this.localStorageItem();
  }



}
