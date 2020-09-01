import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import {Router, ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/Storage';
import { FavouritesService } from 'src/app/services/favourites.service';
import { ArtistaService } from 'src/app/services/artista.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.page.html',
  styleUrls: ['./artista.page.scss'],
})
export class ArtistaPage implements OnInit {

  items: any = [];
  preferiti: any = [];

  id_artista: number;
  nome: string;
  storia: string;
  immart: string;

  anggota: any;
  username: string;
  user_id: number;
  y: number;

  

  constructor(private router: Router, private postPvdr: PostProvider,
    private actRoute: ActivatedRoute, private storage: Storage,
    private serviceFavourites: FavouritesService,
    private serviceArtista: ArtistaService
    ) { }

  ngOnInit() {

    this.actRoute.params.subscribe((data: any) =>{
      this.id_artista = data.id_artista;
      this.nome = data.nome;
      this.storia = data.storia;
      this.immart = data.immart;
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

      this.items = [];
      this.loadAlbums();

      this.getpref();
    });

  }


  showAlbum(id_album, id_artista, titolo, genere, anno, valutazione_media, descrizione, nome, immagine){
  	this.router.navigate(['/tabs/album/' + id_album + '/' + id_artista + '/' + titolo + '/' + genere + '/' + anno + '/' + valutazione_media + '/' + descrizione + '/' + nome + '/' + immagine]);
  }

  
  loadAlbums(){
  	return new Promise(resolve => {
  		let body = {
        aksi : 'getalbumartista',
        artista_id: this.id_artista,
  		};

  		this.serviceArtista.getAlbumArtista(body, 'albumartista.php').subscribe(data => {
  			for(let album of data.result){
  				this.items.push(album);
  			}
  			resolve(true);
  		});
  	});
  }


  btnClicked(){
 
    if((<HTMLInputElement>document.getElementById("stariconartist")).name == "star-outline"){
 
      (<HTMLInputElement>document.getElementById("stariconartist")).name = "star";
      this.addpref();
 
    }else{
 
      (<HTMLInputElement>document.getElementById("stariconartist")).name = "star-outline";
      this.delpref();
    }
    
  }


  addpref(){
    console.log(this.username, this.id_artista);
    return new Promise(resolve => {
  		let body = {
  			aksi : 'addArtistaPref',
        username: this.username,
        id_artista : this.id_artista,
        
  		};

  		this.serviceFavourites.addArtistaPref(body, 'addartistapref.php').subscribe(data => {
  			//this.router.navigate(['/customer']);  Se riusciamo ad implementare il back button, tornare alla pagina precedente
  			console.log('Preferito Aggiunto');
  		});
  	});

  }

  delpref(){
      console.log(this.username);
      let body = {
          aksi : 'delArtistaPref',
          username: this.username,
          id_artista: this.id_artista,
        };
  
        this.serviceFavourites.deleteArtistaPref(body, 'delartistapref.php').subscribe(data => {
         // this.ionViewWillEnter();
         console.log("Preferito Eliminato");
        });
  
  }

  getpref(){
    
    return new Promise(resolve => {
  		let body = {
  			aksi : 'getArtistaPref',
  			username: this.username,
        id_artista : this.id_artista,
  		};

  		this.serviceFavourites.getStarArtista(body, 'getstarartista.php').subscribe(data => {
  			for(let customer of data.result){
          console.log(customer);
          if(customer.id_artista == this.id_artista){ 
             (<HTMLInputElement>document.getElementById("stariconartist")).name = "star";
          }
          else{
            (<HTMLInputElement>document.getElementById("stariconartist")).name = "star-outline";
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

}
