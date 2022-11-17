import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeliculaServicioService {

  constructor(private http:HttpClient) { }

  /*
  * Funcion que devuelve las peliculas de la API
  */
  getPeliculas(pagina:any){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b76fd8ce97b175b609d325162e68032&page='+pagina);
  }

  getPeliculasComedia(pagina:any){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=popularity.desc&api_key=0b76fd8ce97b175b609d325162e68032&page='+pagina);
  }

  getPeliculasTeatro(pagina:any){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=0b76fd8ce97b175b609d325162e68032&page='+pagina);
  }

  getPeliculasDrama(pagina:any){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=0b76fd8ce97b175b609d325162e68032&page='+pagina);
  }

  getPeliculasNinos(pagina:any){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=0b76fd8ce97b175b609d325162e68032&page='+pagina)
  }
    /*
  * Funcion que Guarda una pelicula seleccionada en el LocalStorage
  */
  guardarPelicula(key:string,pelicula:any){
    let elementos = JSON.parse(localStorage.getItem("peliculas2") || '[]');
    if(Array.isArray(elementos)){
      elementos.push(pelicula);


    }else{
      elementos = [pelicula];
    }

    localStorage.setItem(key,JSON.stringify(elementos));

    return pelicula;
  }
}
