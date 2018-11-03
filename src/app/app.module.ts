import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule,MatSortModule } from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { TableService } from './table.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
