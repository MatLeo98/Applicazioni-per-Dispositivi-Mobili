import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Artista} from "../model/artista.model";

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private url = `http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/musicfinder_server/api/artista`;
  constructor(private http: HttpClient,

  ) { }

  getAllArtisti(){
    return this.http.get<[Artista]>(this.url + '/allartisti.php')
  }


}
