import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeliculasComponent } from './Peliculas/peliculas/peliculas.component';

const routes: Routes = [
  { path: '',component:PeliculasComponent},
  {path: '**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
