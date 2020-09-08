import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Artista } from '../model/artista.model';
import { Album } from '../model/album.model';
import { Brano } from '../model/brano.model';


@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  server: string = "http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/server_api/preferiti/";

  constructor(private httpclient: HttpClient, public http : Http) { }

  
  getArtistiPreferiti(username, file){
   
    return this.httpclient.get<[Artista]>(this.server + file + '?username=' + username);
  
  }

  getAlbumsPreferiti(username, file){
    
    return this.httpclient.get<[Album]>(this.server + file + '?username=' + username);
  }

  getBraniPreferiti(username, file){

    return this.httpclient.get<[Brano]>(this.server + file + '?username=' + username);
  }

  addArtistaPref(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());
  }

  addAlbumPref(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());
  }

  addBranoPref(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());
  }

  deleteArtistaPref(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());

    //return this.httpclient.delete(this.server + file + '?id=' + id);
  }

  /*deleteAlbumPref(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());

    //return this.httpclient.delete(this.server + file + '?id=' + id + '?username=' +username);

  }*/

  deleteAlbumPref(username, id, file){

    return this.httpclient.delete(this.server + file + '?id=' + id + '&username=' + username);

  }



  deleteBranoPref(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());

    //return this.httpclient.delete(this.server + file + '?id=' + id);
  }

  getStarArtista(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());

    //return this.httpclient.delete(this.server + file + '?id=' + id);
  }

  getStarAlbum(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());

    //return this.httpclient.delete(this.server + file + '?id=' + id);
  }

  getStarBrano(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());

    //return this.httpclient.delete(this.server + file + '?id=' + id);
  }


  
}
