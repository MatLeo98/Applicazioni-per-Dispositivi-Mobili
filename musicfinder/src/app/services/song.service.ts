import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Http, Headers, RequestOptions } from '@angular/http';

import {Brano} from '../model/brano.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  server: string = "http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/server_api/brani/";

  constructor(private httpclient: HttpClient, public http : Http) { }

  
    getBrani(file){
      
     return this.httpclient.get<[Brano]>(this.server + file);

    }

    
    searchBrani(event, file){
      
     return this.httpclient.get<[Brano]>(this.server + file + '?event=' + event);
      
    }
  
}
