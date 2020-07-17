import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { isString } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  filter: string = "";

  x:number;

  constructor(private router: Router) {

   
   }

  ngOnInit() {}

  results(){

    this.router.navigateByUrl("tabs/results");

  }

  onKeyPress (event: any, filter){
    filter = this.filter;
    console.log(filter);
    console.log(event);
    this.router.navigate(['/tabs/home/results/search/' + event + '/' + filter]);
  }

 /* albums(){
    this.router.navigateByUrl('/tabs/album');
  }

  song(){
    this.router.navigateByUrl('/tabs/song');
  }*/

  Artista(x){

    x = 0;
  
    console.log(x);

    this.router.navigate(['/tabs/home/results/' + x]);

  }

  Album(x){

    x = 1;
  
    console.log(x);

    this.router.navigate(['/tabs/home/results' + '/' + x]);

  }

  Brano(x){


    x = 2;
  
    console.log(x);

    this.router.navigate(['/tabs/home/results/' +  x]);

  }

}
