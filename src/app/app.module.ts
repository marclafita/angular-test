import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { FilterComponent } from './filter/filter.component';
import { ColumnComponent } from './column/column.component';
import { ElementComponent } from './element/element.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    MenuComponent,
    FilterComponent,
    ColumnComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
