import { Component, OnInit } from '@angular/core';
import { ColumnElement } from '../element/column-element';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  Allelements = [
    new ColumnElement('Mahesh', '15:50'),
    new ColumnElement('Krishna', '15:50'),
    new ColumnElement('Narendra', '15:50'),
    new ColumnElement('Narendra', '15:50')
  ];

  //Hello = 'Hello 1';

  constructor() { }

  ngOnInit() {
  }
}
