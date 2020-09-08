import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import {Router, ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/Storage';
import { FavouritesService } from 'src/app/services/favourites.service';



@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {

  id_brano: number;
  id_album: number;
  titolo: string;
  durata: string;
  valutazione_media: number;
  descrizione: string;
  testo: string;
  youtube: string;
  genere: string;
  titalb: string;
  nome: string;
  immagine: string;

  anggota: any;
  username: string;
  user_id: number;

  items: any = [];
  preferiti: any = [];

  dati: any = [];
  val_media: number;

  check: number = 0;
  y: number;
  

  constructor(private router: Router, private postPvdr: PostProvider,
    private actRoute: ActivatedRoute, private storage: Storage,
    private serviceFavourites: FavouritesService) {
    
    }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.id_brano = data.id_brano;
      this.id_album = data.id_album;
      this.titolo = data.titolo;
      this.durata = data.durata;
      this.valutazione_media = data.valutazione_media;
      this.descrizione = data.descrizione;
      this.testo = data.testo;
      this.youtube = data.youtube;
      this.genere = data.genere;
      this.titalb = data.titalb;
      this.nome = data.nome;
      this.immagine = data.immagine;
      this.y = data.y;
      console.log(data);
   });
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.user_id = this.anggota.user_id;
      this.username = this.anggota.username;
      console.log(res);
      this.getpref();
      this.items = [];

      
      this.val_media = 0;
      if(this.check==0){
        this.loadReview();
        this.check++;
      }else{this.Val_media();}
    });

  }

  btnClicked(){

    if((<HTMLInputElement>document.getElementById("stariconsong")).name == "star-outline"){

      (<HTMLInputElement>document.getElementById("stariconsong")).name = "star";
      this.addpref();

    }else{

      (<HTMLInputElement>document.getElementById("stariconsong")).name = "star-outline";
      this.delpref();
    }
    
  }

  reviews(id_brano){
    if(this.y != 10)
  	  this.router.navigate(['/tabs/home/results/2/song/' +this.id_brano+'/'+this.id_album+'/'+this.titolo+'/'+this.durata+'/'+this.valutazione_media+'/'+this.descrizione+'/'+this.testo+'/'+this.youtube+'/'+this.genere+'/'+this.titalb+'/'+this.nome+'/'+this.immagine+'/reviews/brani/' + id_brano]);
    else
    this.router.navigate(['/tabs/favourites/10/song/' +this.id_brano+'/'+this.id_album+'/'+this.titolo+'/'+this.durata+'/'+this.valutazione_media+'/'+this.descrizione+'/'+this.testo+'/'+this.youtube+'/'+this.genere+'/'+this.titalb+'/'+this.nome+'/'+this.immagine+'/reviews/brani/' + id_brano]);

    }


  addpref(){
    console.log(this.username, this.id_brano);
    return new Promise(resolve => {
  		let body = {
  			aksi : 'addBranoPref',
        username: this.username,
        id_brano : this.id_brano,
        
  		};

  		this.serviceFavourites.addBranoPref(body, 'addbranopref.php').subscribe(data => {
  			//this.router.navigate(['/customer']);  Se riusciamo ad implementare il back button, tornare alla pagina precedente
  			console.log('Preferito Aggiunto');
  		});
  	});

  }

  delpref(){
      /*console.log(this.username);
      let body = {
          aksi : 'delBranoPref',
          username: this.username,
          id_brano: this.id_brano,
        };
  
        this.serviceFavourites.deleteBranoPref(body, 'delbranopref.php').subscribe(data => {
         // this.ionViewWillEnter();
         console.log("Preferito Eliminato");
        });*/
        this.serviceFavourites.deleteBranoPref(this.username, this.id_brano, 'delbranopref.php').subscribe(response => {
          console.log(response);
         console.log("Preferito Eliminato");
        });
  
  }

  getpref(){
    
   /* return new Promise(resolve => {
  		let body = {
  			aksi : 'getBranoPref',
  			username: this.username,
        id_brano : this.id_brano,
  		};

  		this.serviceFavourites.getStarBrano(body, 'getstarbrano.php').subscribe(data => {
  			for(let customer of data.result){
          console.log(customer);
          if(customer.id_brano == this.id_brano){ 
             (<HTMLInputElement>document.getElementById("stariconsong")).name = "star";
          }
          else{
            (<HTMLInputElement>document.getElementById("stariconsong")).name = "star-outline";
          }
  				this.preferiti.push(customer);
  			}
        resolve(true);
        console.log(this.preferiti);
        /*for(let i=0; i<this.preferiti.length; i++){
          console.log(this.preferiti);
          //console.log(pref.id_album);
          if(this.preferiti[i].id_album == this.id_album){ 
             (<HTMLInputElement>document.getElementById("stariconalbum")).name = "star";
          }
          else{
            (<HTMLInputElement>document.getElementById("stariconalbum")).name = "star-outline";
          }*/
  	/*	});
    });*/

    this.serviceFavourites.getStarBrano(this.username, this.id_brano, 'getstarbrano.php').subscribe(response => {
      this.items = response;
     console.log(this.items);
      console.log(response[0].id_brano, this.id_brano);
      if(response[0].id_brano == this.id_brano){ 
        (<HTMLInputElement>document.getElementById("stariconsong")).name = "star";
     }
     else{
       (<HTMLInputElement>document.getElementById("stariconsong")).name = "star-outline";
     }
    
    });
    
  }

  loadReview(){
  	
 
    return new Promise(resolve => {
      let body = {
        aksi : 'getReviewsBrani',
        id_brano : this.id_brano,
      };
  
      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        for(let review of data.result){
          this.dati.push(review);
          
        }

        resolve(true);
        this.Val_media();
        console.log('OK');
      });
      
    });
    }

    Val_media(){
      console.log(this.val_media);
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

 

}
