import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import {Router, ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/Storage';
import { FavouritesService } from 'src/app/services/favourites.service';
import { ArtistaService } from 'src/app/services/artista.service';
import { Location } from "@angular/common";


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
  res: any;
  

  

  constructor(private router: Router, private postPvdr: PostProvider,
    private actRoute: ActivatedRoute, private storage: Storage,
    private serviceFavourites: FavouritesService,
    private serviceArtista: ArtistaService,
    private location: Location
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

      this.getpref();
    });
   
   
    this.items = [];
    
    this.loadAlbums();
    
  }


  showAlbum(id_album, id_artista, titolo, genere, anno, valutazione_media, descrizione, nome, immagine){
  	this.router.navigate(['/tabs/album/' + id_album + '/' + id_artista + '/' + titolo + '/' + genere + '/' + anno + '/' + valutazione_media + '/' + descrizione + '/' + nome + '/' + immagine]);
  }

  
  loadAlbums(){
    
    this.serviceArtista.getAlbumArtista(this.id_artista, 'albumartista.php').subscribe(response => {
      this.items = response;
      console.log(this.items);
    });
  }


  btnClicked(){

    if(this.username != undefined){
 
      if((<HTMLInputElement>document.getElementById("stariconartist")).name == "star-outline"){
  
        (<HTMLInputElement>document.getElementById("stariconartist")).name = "star";
        this.addpref();
  
      }else{
  
        (<HTMLInputElement>document.getElementById("stariconartist")).name = "star-outline";
        this.delpref();
      }
    }else{
      this.router.navigate(['/login']);
    }
    
  }

  back(){
    this.location.back();

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
  			console.log('Preferito Aggiunto');
  		});
  	});

  }

  delpref(){
      

        this.serviceFavourites.deleteArtistaPref(this.username, this.id_artista, 'delartistapref.php').subscribe(response => {
          console.log(response);
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
        
  		});
    });
    
  }

}
