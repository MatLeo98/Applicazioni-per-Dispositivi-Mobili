import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  filter: any = {};

  constructor() { }

  ngOnInit() {
  }

submit(){

console.log(this.filter);

}

}
