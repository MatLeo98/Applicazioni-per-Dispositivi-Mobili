import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { Storage } from '@ionic/Storage';
import { FavouritesService } from 'src/app/services/favourites.service';


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

  delArtistapref(id){
   
      console.log(id, this.username);
      this.serviceFavourites.deleteArtistaPref(this.username, id, 'delartistapref.php').subscribe(response => {
        var myobj = document.getElementById(id);
        myobj.remove();
        console.log(response);
       console.log("Preferito Eliminato");
      });

}

delAlbumpref(username, id){

  

    this.serviceFavourites.deleteAlbumPref(username, id, 'delalbumpref.php').subscribe(response => {
      var myobj = document.getElementById(id);
      myobj.remove();
      console.log(response);
     console.log("Preferito Eliminato");
    });
}

delBranopref(id){
   

      this.serviceFavourites.deleteBranoPref(this.username, id, 'delbranopref.php').subscribe(response => {
        var myobj = document.getElementById(id);
        myobj.remove();
        console.log(response);
       console.log("Preferito Eliminato");
      });

}


  getArtistiPref(){
      
  		this.serviceFavourites.getArtistiPreferiti(this.username, 'artistipref.php').subscribe(response => {
        this.favourites = response;
    });
    
  }

  getAlbumsPref(){

    this.serviceFavourites.getAlbumsPreferiti(this.username, 'albumspref.php').subscribe(response => {
      this.favourites = response;
  });

  }


  getBraniPref(){

    this.serviceFavourites.getBraniPreferiti(this.username, 'branipref.php').subscribe(response => {
      this.favourites = response;
  });
   }

}