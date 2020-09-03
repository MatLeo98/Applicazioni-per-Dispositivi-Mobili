import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  anggota: any;
  username: string;
  
  customers: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  constructor(private postPvdr: PostProvider,
    
    public toastCtrl: ToastController, private router: Router,  private storage: Storage) { }

  ngOnInit() {
    this.logincheck();
    this.loadimage();
    }

  logincheck(){
      this.storage.get('session_storage').then((res)=>{
        if(res == null){
          this.router.navigate(['/login']);
        }else{
          this.router.navigate(['/tabs/profile']);
        }
      });
  }

   /* this.storage.get('session_storage').then((res)=>{
      if(res == null){
        this.router.navigate(['/tabs/login']);
      }else{
        this.router.navigate(['/tabs/favourites']);
      }
    });*/
  

  settings(){
    this.router.navigateByUrl('/tabs/settings');
  }

  gotoArtista(){
    this.router.navigateByUrl('/tabs/artista'); //cambiare il link

  }

  loadimage(){

  }






  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.username = this.anggota.username;
      console.log(res);
    });

  }

  
}



