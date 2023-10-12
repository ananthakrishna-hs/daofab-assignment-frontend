import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentTxnsComponent } from './components/parent-txns/parent-txns.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildTxnsComponent } from './components/child-txns/child-txns.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentTxnsComponent,
    ChildTxnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
