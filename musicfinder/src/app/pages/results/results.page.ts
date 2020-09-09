import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ArtistaService } from 'src/app/services/artista.service';
import { AlbumService } from 'src/app/services/album.service';
import { SongService } from 'src/app/services/song.service';
import {Artista} from '../../model/artista.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  //items: String[];

  anggota: any;
  x: number;
  
  items: any = [];
  limit: number = 13; // SCEGLIERE LIMITE
  start: number = 0;
  event: string = "";
  filter: string = "";
  

  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController,
    private actRoute: ActivatedRoute,
    private serviceArtista: ArtistaService,
    private serviceAlbum: AlbumService,
    private serviceSong: SongService,
    ) {


   }


  ngOnInit() {

    this.actRoute.params.subscribe((data: any) =>{
      this.event = data.event;
      this.filter = data.filter;
      this.x = data.x;
      console.log(data);
    });
  }



  ionViewWillEnter(){

  	this.items = [];
    this.start = 0;
    if(this.event == undefined || this.event == "" ){
      
      if (this.x == 2)
      this.loadBrani();
      else { if(this.x == 1){
          this.loadAlbums();}
        else  { if(this.x == 0)
          this.loadArtisti();
      }
      
    }
      
    }else{
      if(this.filter == 'Album'){
      this.x = 1;
      this.searchAlbum();
      }
      if(this.filter == 'Artisti'){
        this.x=0;
        this.searchArtisti();
        }
        if(this.filter == 'Brani'){
          this.x=2;
          this.searchBrani();
          }
    }

   
  }


  showAlbum(id_album, id_artista, titolo, genere, anno, immagine, valutazione_media, descrizione, nome){
  	this.router.navigate(['/tabs/album/' + id_album + '/' + id_artista + '/' + titolo + '/' + genere + '/' + anno + '/' + immagine + '/' + valutazione_media + '/' + descrizione + '/' + nome]);
  }

  doRefresh(event){
  	setTimeout(() =>{
  		this.ionViewWillEnter();
  		event.target.complete();
  	}, 500);
  }



  loadAlbums(){
    
    this.serviceAlbum.getAlbum('allalbum.php').subscribe(response => {
      this.items = response;
    });
  }


  searchAlbum(){

    this.serviceAlbum.searchAlbum(this.event, 'allalbum.php').subscribe(response => {
      this.items = response;
    });
    

  }

  searchArtisti(){

  		this.serviceArtista.searchArtisti(this.event, 'allartisti.php').subscribe(response => {
        this.items = response;
    });
    
  }

  searchBrani(){

  		this.serviceSong.searchBrani(this.event, 'allbrani.php').subscribe(response => {
        this.items = response;
    });
    
  }


  showArtista(id_artista, nome, storia, immart){
    this.router.navigate(['/tabs/artista/' + id_artista + '/' + nome  + '/' + storia + '/' + immart]);
  }
  
  loadArtisti(){
  
    this.serviceArtista.getArtisti('allartisti.php').subscribe(response => {
      this.items = response;
    });
  
  }

  showBrano(id_brano, id_album, titolo, durata, valutazione_media, descrizione, testo, youtube, genere, titalb, nome, immagine){
    this.router.navigate(['/tabs/brano/' + id_brano + '/' + id_album + '/' + titolo + '/' + durata + '/' + valutazione_media + '/' + descrizione + '/' + testo + '/' + youtube + '/' + genere + '/' + titalb + '/' + nome + '/' + immagine]);
  }
  
    loadBrani(){

      this.serviceSong.getBrani('allbrani.php').subscribe(response => {
        this.items = response;
      });

    }

    






}
