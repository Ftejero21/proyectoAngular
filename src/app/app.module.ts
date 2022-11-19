import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './Header/header-component/header-component.component';
import {HttpClientModule} from '@angular/common/http';
import { PeliculasComponent } from './Peliculas/peliculas/peliculas.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,

    PeliculasComponent,
     NotfoundComponent,
     ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponentComponent]
})
export class AppModule { }
