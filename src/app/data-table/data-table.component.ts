import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material';
import { TableService } from "../table.service";

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./_data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns = ['colorName', 'hexValue'];

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getData().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    })
  }
}
