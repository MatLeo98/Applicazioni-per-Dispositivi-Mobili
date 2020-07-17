import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = "";
  username: string = "";
  password: string = "";
  confirm_password: string = "";
  img: Blob;
  camera: any;
  img1: any;
  isVisible: boolean;
  notVisible: boolean;
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.isVisible = true;
    this.notVisible = false;
  }


  fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;  
      let file: File = fileList[0];
      console.log(file);
      this.isVisible = false;
      this.notVisible = true;
  }



  async prosesRegister(){
    // validation done
    if(this.email==""){
      const toast = await this.toastCtrl.create({
        message: 'Email is required',
        duration: 3000
      });
      toast.present();
    }else if(this.email==""){
      const toast = await this.toastCtrl.create({
        message: 'Username is required',
        duration: 3000
      });
      toast.present();
  }else if(this.password==""){
      const toast = await this.toastCtrl.create({
        message: 'Password is required',
        duration: 3000
      });
      toast.present();
  }else if(this.password!=this.confirm_password){
      const toast = await this.toastCtrl.create({
        message: 'Invalid password',
        duration: 3000
      });
      toast.present();
  }else{

    let body = {
      img: this.img,
      email: this.email,
      username: this.username,
      password: this.password,
      aksi: 'register'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.router.navigate(['/login']);
          const toast = await this.toastCtrl.create({
            message: 'Register succesful',
            duration: 3000
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });

    }
  
  }

  formLogin(){
  	this.router.navigate(['/login']);
  }

}
