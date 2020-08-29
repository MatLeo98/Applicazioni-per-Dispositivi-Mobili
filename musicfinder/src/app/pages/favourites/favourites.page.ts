import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { Storage } from '@ionic/Storage';
import { FavouritesService } from 'src/app/services/favourites.service';
/* import { url } from 'inspector'; */

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  anggota: any;
  username: string;
  user_id: number;
  favourites: any = [];

  artisti = [

    {id: 1, name: 'Thom Yorke', type: 'Artista'},
    {id: 2, name: 'Radiohead', type: 'Artista'},

  ];

  album = [

    {id: 3, name: 'Kid A', artist: 'Radiohead', year: '2000', type: 'Album'},
    {id: 4, name: 'Anima', artist: 'Thom Yorke', year: '2019', type: 'Album'},

  ];

  brani = [

    {id: 5, name: 'Optimistic', artist: 'Radiohead', year: '2000', type: 'Brano'},
    {id: 6, name: 'Traffic', artist: 'Thom  Yorke', year: '2019', type: 'Brano'},

  ];

  filt : number;


  constructor(
    private router: Router,
    private storage: Storage,
    private postPvdr: PostProvider,
    private serviceFavourites: FavouritesService) {}

  filtro(){

    if((<HTMLInputElement>document.getElementById("1")).value == 'Artista' ){

        this.filt = 0;
        this.getArtistiPref();
      }
    else{

       if((<HTMLInputElement>document.getElementById("1")).value == 'Album'){

        this.filt = 1;
        this.getAlbumsPref();
      }

       else {

        if((<HTMLInputElement>document.getElementById("1")).value == 'Brano'){

            this.filt = 2;
           this.getBraniPref();
          }

       }
    }

  }

  ngOnInit() {
    
    this.logincheck();
    
    }

    ionViewWillEnter(){
      this.storage.get('session_storage').then((res)=>{
        this.anggota = res;
        this.user_id = this.anggota.user_id;
        this.username = this.anggota.username;
        console.log(res);

        this.filtro();
      });
  
    }

  logincheck(){
      this.storage.get('session_storage').then((res)=>{
        if(res == null){
          this.router.navigate(['/login']);
        }else{
          this.router.navigate(['/tabs/favourites']);
        }
      });
  
    this.filtro();

  }

  clicked(){

      var myobj = document.getElementById("elem");
      myobj.remove();

  }

  delArtistapref(id_artista){
    console.log(this.username, id_artista);
    let body = {
        aksi : 'delArtistaPref',
        username: this.username,
        id_artista: id_artista,
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
       // this.ionViewWillEnter();
       /*var list = document.getElementById("mylist");
        list.removeChild(list.childNodes[1]);*/
      var myobj = document.getElementById("elem");
      myobj.remove();
       console.log("Preferito Eliminato");
      });

}

delAlbumpref(id){
  console.log(this.username, id);
  let body = {
      aksi : 'delAlbumPref',
      username: this.username,
      id_album: id,
    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
     // this.ionViewWillEnter();
     var myobj = document.getElementById("elem");
    myobj.remove();
     console.log("Preferito Eliminato");
    });

}

delBranopref(id_brano){
    console.log(this.username, id_brano);
    let body = {
        aksi : 'delBranoPref',
        username: this.username,
        id_brano: id_brano,
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
       // this.ionViewWillEnter();
      var myobj = document.getElementById("elem");
      myobj.remove();
      //location.reload(); Ricaricare la pagina
       console.log("Preferito Eliminato");
      });

}


  getArtistiPref(){
   
  	return new Promise(resolve => {
    
  		let body = {
        aksi : 'getArtistiPref',
        username: this.username,
       
      };
      

  		this.serviceFavourites.getArtistiPreferiti(body, 'artistipref.php').subscribe(data => {
  		/*	for(let favourite of data.result){
  				this.favourites.push(favourite);
        }*/
        this.favourites = data.result;
        console.log(data.result);
        console.log(this.favourites);
  			resolve(true);
  		});
  	});
  }

  getAlbumsPref(){
   console.log(this.username);
  	return new Promise(resolve => {
    
  		let body = {
        aksi : 'getAlbumsPref',
        username: this.username,
       
      };
      

  		this.serviceFavourites.getAlbumsPreferiti(body, 'albumspref.php').subscribe(data => {
  			/*for(let favourite of data.result){
  				this.favourites.push(favourite);
        }*/
        this.favourites = data.result;
        console.log(data.result);
        console.log(this.favourites);
  			resolve(true);
  		});
  	});
  }


  getBraniPref(){
    console.log(this.username);
     return new Promise(resolve => {
     
       let body = {
         aksi : 'getBraniPref',
         username: this.username,
        
       };
       
 
       this.serviceFavourites.getBraniPreferiti(body, 'branipref.php').subscribe(data => {
       /*	for(let favourite of data.result){
           this.favourites.push(favourite);
         }*/
         this.favourites = data.result;
         console.log(data.result);
         console.log(this.favourites);
         resolve(true);
       });
     });
   }

}