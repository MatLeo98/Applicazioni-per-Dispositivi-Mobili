import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Http, Headers, RequestOptions } from '@angular/http';

import {Album} from '../model/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  server: string = "http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/server_api/album/";

  constructor(private httpclient: HttpClient, public http : Http) { }

  
    getAlbum(file){
      let type = "application/json; charset=UTF-8";
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
  
      /*return this.http.post(this.server + file, JSON.stringify(body), options)
      .map(res => res.json());*/
     return this.httpclient.get<[Album]>(this.server + file);
    }

    searchAlbum(event, file){
      /*let type = "application/json; charset=UTF-8";
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
  
      return this.http.post(this.server + file, JSON.stringify(body), options)
      .map(res => res.json());*/
      return this.httpclient.get(this.server + file + '?event=' + event );

    }

    getBraniAlbum(body, file){
      let type = "application/json; charset=UTF-8";
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
  
      return this.http.post(this.server + file, JSON.stringify(body), options)
      .map(res => res.json());
    }
  
}
