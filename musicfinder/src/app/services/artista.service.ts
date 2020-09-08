import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Http, Headers, RequestOptions } from '@angular/http';

import {Artista} from '../model/artista.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  server: string = "http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/server_api/artista/";

  constructor(private httpclient: HttpClient, public http : Http) { }

  
    getArtisti(file){
      let type = "application/json; charset=UTF-8";
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
  
      /*return this.http.post(this.server + file, JSON.stringify(body), options)
      .map(res => res.json());*/
     return this.httpclient.get<[Artista]>(this.server + file);
    }

    searchArtisti(event, file){

      return this.httpclient.get<[Artista]>(this.server + file + '?event=' + event );
      
    }

    getAlbumArtista(body, file){
      let type = "application/json; charset=UTF-8";
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
  
      return this.http.post(this.server + file, JSON.stringify(body), options)
      .map(res => res.json());
    }
  
}
