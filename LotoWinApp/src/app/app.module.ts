import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApostasComponent } from './apostas/apostas.component';
import { NavComponent } from './nav/nav.component';
import { CadastroComponent } from './cadastro/cadastro.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DateFormatPipePipe } from './helper/dateFormatPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ApostasComponent,
    NavComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [DateFormatPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
