import { Component, OnInit } from '@angular/core';
import { CareerService } from '../career.service';
import { Idemo } from '../career-intertace';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  testArrays = [];
  
  constructor(private _demoservice: CareerService) { }

  ngOnInit() {
    this._demoservice.getcareerArray().subscribe(data => this.testArrays = data);
  }

}
