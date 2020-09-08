import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Http, Headers, RequestOptions } from '@angular/http';

import { Recensione_Album } from '../model/recensione-album.model';

import { Recensione_Brano } from '../model/recensione-brano.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  server: string = "http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/server_api/recensioni/";


  constructor(private httpclient: HttpClient, public http : Http) { }

  getRecensioniAlbum(id, file){
   
    return this.httpclient.get<[Recensione_Album]>(this.server + file + '?id=' + id);
    
  }

  getRecensioniBrani(id_brano, file){

    return this.httpclient.get<[Recensione_Brano]>(this.server + file + '?id_brano=' + id_brano);

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
