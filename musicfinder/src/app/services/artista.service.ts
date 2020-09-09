import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Http, Headers, RequestOptions } from '@angular/http';

import {Artista} from '../model/artista.model';
import {Album} from '../model/album.model';


@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  server: string = "http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/server_api/artista/";

  constructor(private httpclient: HttpClient, public http : Http) { }

  
    getArtisti(file){
     
     return this.httpclient.get<[Artista]>(this.server + file);

    }

    searchArtisti(event, file){

      return this.httpclient.get<[Artista]>(this.server + file + '?event=' + event );
      
    }

    getAlbumArtista(id_artista, file){
     
      return this.httpclient.get<[Album]>(this.server + file + '?id_artista=' + id_artista );

    }
  
}
