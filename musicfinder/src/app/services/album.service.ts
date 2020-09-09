import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Http, Headers, RequestOptions } from '@angular/http';

import {Album} from '../model/album.model';
import {Brano} from '../model/brano.model';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  server: string = "http://localhost/database/App/Applicazioni-per-Dispositivi-Mobili/server_api/album/";

  constructor(private httpclient: HttpClient, public http : Http) { }

  
    getAlbum(file){
     
     return this.httpclient.get<[Album]>(this.server + file);

    }

    searchAlbum(event, file){
      
     return this.httpclient.get<[Album]>(this.server + file + '?event=' + event );

    }

    getBraniAlbum(id_album, file){

     return this.httpclient.get<[Brano]>(this.server + file + '?id_album=' + id_album );

    }
  
}
