import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/Storage';
import { FavouritesService } from 'src/app/services/favourites.service';
import { AlbumService } from 'src/app/services/album.service';
import { Location } from "@angular/common";
import { ReviewsService } from 'src/app/services/reviews.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  
  id_album: number;
  titolo: string;
  genere: string;
  descrizione: string;
  valutazione_media: number;
  id_artista: number;
  anggota: any;
  username: string;
  user_id: number;
  preferiti: any = [];
  items: any = [];
  anno: number;
  immagine: string;
  nome: string;

  dati: any = [];
  val_media: number;
  media: number;

  check: number = 0;
  y: number;
 
  

  constructor(private router: Router,
    private actRoute: ActivatedRoute,
    private storage: Storage,
    private serviceFavourites: FavouritesService,
    private serviceAlbum: AlbumService,
    private location: Location,
    private serviceReviews: ReviewsService
    ) {


   }

  ngOnInit() {

   
    

    this.actRoute.params.subscribe((data: any) =>{
      this.id_album = data.id_album;
  		this.titolo = data.titolo;
      this.genere = data.genere;
      this.anno = data.anno;
      this.immagine = data.immagine;
      this.valutazione_media = data.valutazione_media;
      this.descrizione = data.descrizione;
      this.id_artista = data.id_artista;
      this.nome = data.nome;
      this.y = data.y;
      
      console.log(data);
     
     
    });
  }

  btnClicked(){

    

    if((<HTMLInputElement>document.getElementById("stariconalbum")).name == "star-outline"){

      (<HTMLInputElement>document.getElementById("stariconalbum")).name = "star";

      this.addpref();

    }else{

      (<HTMLInputElement>document.getElementById("stariconalbum")).name = "star-outline";

      this.delpref();
     
    }

  }


  reviews(id_album){
    if(this.y != 10)
    this.router.navigate(['/tabs/home/results/1/album/' + id_album + '/' + this.id_artista + '/' + this.titolo + '/' + this.genere + '/' + this.anno + '/' + this.immagine + '/' + this.valutazione_media + '/' + this.descrizione + '/' + this.nome + '/reviews/' + id_album]);
    else
    this.router.navigate(['/tabs/favourites/10/album/' + id_album + '/' + this.id_artista + '/' + this.titolo + '/' + this.genere + '/' + this.anno + '/' + this.immagine + '/' + this.valutazione_media + '/' + this.descrizione + '/' + this.nome + '/reviews/' + id_album]);

  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.user_id = this.anggota.user_id;
      this.username = this.anggota.username;
      console.log(res);

      this.items = [];
       this.getpref();
      this.loadBrani();

      
      this.val_media = 0;
      if(this.check==0){
        this.loadReview();
        this.check++;
      }else{this.Val_media();}

    });

  }

  loadBrani(){
    
    this.serviceAlbum.getBraniAlbum(this.id_album, 'branialbum.php').subscribe(response => {
      this.items = response;
    });
  }

  addpref(){
    console.log(this.username);
    return new Promise(resolve => {
  		let body = {
  			aksi : 'addAlbumPref',
        username: this.username,
        id_album : this.id_album,
        
  		};

  		this.serviceFavourites.addAlbumPref(body, 'addalbumpref.php').subscribe(data => {
  			console.log('Preferito Aggiunto');
  		});
  	});

  }

  delpref(){

        this.serviceFavourites.deleteAlbumPref(this.username, this.id_album, 'delalbumpref.php').subscribe(response => {
          console.log(response);
         console.log("Preferito Eliminato");
        });
  
  }

 



  getpref(){
    
    return new Promise(resolve => {
  		let body = {
  			aksi : 'getAlbumPref',
  			username: this.username,
        id_album : this.id_album,
  		};

  		this.serviceFavourites.getStarAlbum(body, 'getstaralbum.php').subscribe(data => {
  			for(let customer of data.result){
          console.log(customer.id_album, this.id_album);
          if(customer.id_album == this.id_album){ 
             (<HTMLInputElement>document.getElementById("stariconalbum")).name = "star";
          }
          else{
            (<HTMLInputElement>document.getElementById("stariconalbum")).name = "star-outline";
          }
  				this.preferiti.push(customer);
  			}
        resolve(true);
        console.log(this.preferiti);
        
  		});
    });
    
  }

  loadReview(){
  	
 
    /*return new Promise(resolve => {
      let body = {
        aksi : 'getreviews',
        album_id : this.id_album,
      };
  
      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        for(let review of data.result){
          this.dati.push(review);
          
        }

        resolve(true);
        this.Val_media();
        console.log('OK');
      });*/

      this.serviceReviews.getRecensioniAlbum(this.id_album, 'recensionialbum.php').subscribe(response => {
        this.dati = response;
        this.Val_media();
        });
      
    //});

    

  }

  Val_media(){
     
    for(let dato of this.dati){
      console.log(dato.valutazione, this.val_media);
      this.val_media =  +dato.valutazione + +this.val_media;
    }
    
    if(this.val_media != 0){
      this.val_media = this.val_media / this.dati.length;
      this.val_media = Math.round(this.val_media);
    }
    
    console.log(this.val_media);
  }

  back(){
    this.location.back();

  }
  

}
