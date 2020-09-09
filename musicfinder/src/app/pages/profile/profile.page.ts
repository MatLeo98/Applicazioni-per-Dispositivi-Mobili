import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  anggota: any;
  username: string;
  immagine: string;
  lunghezza: number;
  
  customers: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  items: any = [];
  constructor(private postPvdr: PostProvider,
    
    public toastCtrl: ToastController, private router: Router,  private storage: Storage, private serviceUser: UserService) { }

  ngOnInit() {
    this.logincheck();
    
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
  
  settings(){
    this.router.navigateByUrl('/tabs/settings');
  }

  gotoArtista(){
    this.router.navigateByUrl('/tabs/artista'); 

  }






  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.username = this.anggota.username;
      this.immagine = this.anggota.immagine;
      this.immagine = this.immagine.substr(10,100);
      console.log(res);
      
    });

  }

  
}



