import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  server: string = "http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/server_api/recensioni/";


  constructor(private httpclient: HttpClient, public http : Http) { }

  getRecensioniAlbum(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());
  }

  getRecensioniBrani(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());
  }

  addReviewAlbum(body, file){

    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());

  }

  addReviewBrano(body, file){

    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());

  }


}
