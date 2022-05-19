import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data:any
  @Input() columns!:string[]

  constructor() { }

  ngOnInit(): void {
  }

}
