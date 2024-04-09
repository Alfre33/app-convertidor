import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarJagfComponent } from './components/navbar-jagf/navbar-jagf.component';
import { ConvertidorJagfComponent } from './components/convertidor-jagf/convertidor-jagf.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarJagfComponent,
    ConvertidorJagfComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
