import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-warehouse-success',
  templateUrl: './warehouse-success.component.html',
  styleUrls: ['./warehouse-success.component.css']
})
export class WarehouseSuccessComponent implements OnInit {

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {

  }

  ngOnInit(): void {

  }


}
