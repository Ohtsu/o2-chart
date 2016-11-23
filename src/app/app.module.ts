import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { TodosComponent } from './todos/todos.component';
import { O2chartComponent } from './o2chart/o2chart.component';
// import { ChartConst} from './o2chart/shared/chart-const';

@NgModule({
  declarations: [
    AppComponent,
    // TodosComponent,
    O2chartComponent,
    // ChartConst
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

