import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Http, Headers, RequestOptions } from '@angular/http';

import {Notizia} from '../model/notizia.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  server: string = "http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/server_api/";

  constructor(private httpclient: HttpClient, public http : Http) { }

  getNews(file){

    return this.httpclient.get<[Notizia]>(this.server + file);

  }

}
