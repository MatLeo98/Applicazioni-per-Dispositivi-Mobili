import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import {Router, ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/Storage';


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
  

  constructor(private router: Router, private postPvdr: PostProvider,
  	private actRoute: ActivatedRoute, private storage: Storage) {
    
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
   });
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.user_id = this.anggota.user_id;
      this.username = this.anggota.username;
      console.log(res);

      this.items = [];

      this.getpref();
      this.val_media = 0;
      this.loadReview();
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
  	this.router.navigate(['/tabs/reviews/brani/' + id_brano]);
  }


  addpref(){
    console.log(this.username, this.id_brano);
    return new Promise(resolve => {
  		let body = {
  			aksi : 'addBranoPref',
        username: this.username,
        id_brano : this.id_brano,
        
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			//this.router.navigate(['/customer']);  Se riusciamo ad implementare il back button, tornare alla pagina precedente
  			console.log('Preferito Aggiunto');
  		});
  	});

  }

  delpref(){
      console.log(this.username);
      let body = {
          aksi : 'delBranoPref',
          username: this.username,
          id_brano: this.id_brano,
        };
  
        this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
         // this.ionViewWillEnter();
         console.log("Preferito Eliminato");
        });
  
  }

  getpref(){
    
    return new Promise(resolve => {
  		let body = {
  			aksi : 'getBranoPref',
  			username: this.username,
        id_brano : this.id_brano,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
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
  		});
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
     this.val_media = this.val_media / this.dati.length;
     
     console.log(this.val_media);
   }

 

}
