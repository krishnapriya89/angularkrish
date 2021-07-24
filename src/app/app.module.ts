import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { SampleComponent } from './sample/sample.component';
import { SwtchcaseComponent } from './swtchcase/swtchcase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegformComponent } from './regform/regform.component';
import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import{HttpClientModule} from '@angular/common/http';
import { ShowdetailsComponent } from './showdetails/showdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    SampleComponent,
    SwtchcaseComponent,
    RegformComponent,
    ShowdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
