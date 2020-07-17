import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router,private storage: Storage, public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl('/tabs/profile');
  }


  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }


}
