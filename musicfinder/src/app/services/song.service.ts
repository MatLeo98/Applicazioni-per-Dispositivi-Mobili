import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Http, Headers, RequestOptions } from '@angular/http';

import {Brano} from '../model/brano.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  server: string = "http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/server_api/";

  constructor(private httpclient: HttpClient, public http : Http) { }

  
    getBrani(file){
      let type = "application/json; charset=UTF-8";
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
  
      /*return this.http.post(this.server + file, JSON.stringify(body), options)
      .map(res => res.json());*/
     return this.httpclient.get<[Brano]>(this.server + file);
    }

    
    searchBrani(body, file){
      let type = "application/json; charset=UTF-8";
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
  
      return this.http.post(this.server + file, JSON.stringify(body), options)
      .map(res => res.json());
    }
  
}
