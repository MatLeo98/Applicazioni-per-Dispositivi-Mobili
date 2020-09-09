import { Component, ViewChild , OnInit} from '@angular/core';
import {Platform,IonInfiniteScroll} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ReviewsService } from 'src/app/services/reviews.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})

export class ReviewsPage implements OnInit{
  @ViewChild(IonInfiniteScroll,null)
  
  infiniteScroll:IonInfiniteScroll;
  data:any[]=[];
  i:number=0;
  reviews: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  titolo: string;
  valutazione: number;
  testo: string;
  id_autore: number;
  id_album: number;
  id: number = 0;
  id_brano: number = 0;
  brani: string;
  
  //       constructor(private platform:Platform){
//       
  //         this.platform.ready().then(()=>{
  //           for(var interval =0; interval<20;interval++)
  //           {
  //             this.i++;
  //             this.data.push(this.i.toString());
  //           }
  //         })
//       
  //       }

constructor(private platform:Platform, 	private router: Router,
  private storage: Storage,
  public toastCtrl: ToastController,
  private actRoute: ActivatedRoute,
  private serviceReviews: ReviewsService){

    this.platform.ready().then(()=>{
      for(var interval =0; interval<20;interval++)
      {
        this.i++;
        this.data.push(this.i.toString());
      }
    })
}

ngOnInit() {
  this.actRoute.params.subscribe((data: any) =>{
    this.id = data.id_album;
    this.id_brano = data.id_brano;
    this.brani = data.brani;
    console.log(data);
  });
}



 /* LoadData(event){

    setTimeout(()=>{
      for(var interval = 0; interval<10;interval++)  // da modificare "10" numero di elementi caricati ad ogni loading
        {
          this.i++;
          this.data.push(this.i.toString());
        }
      // this settimeout method is only demo purpose actually you loda data from your database using api

      event.target.complete();
      if(this.data.length == 1000)
        {
          event.target.disable = true;
        }

    },1000)
  }*/



  ionViewWillEnter(){

  	this.reviews = [];
    this.start = 0;
    
    /*if(this.id_brano != undefined)
      this.loadReviewsBrani();
    if(this.id != undefined)
      this.loadReview();*/
    if(this.brani != undefined)
      this.loadReviewsBrani();
    else
      this.loadReview();
      

  }

  /*loadData(event:any){
  	this.start += this.limit;
  	setTimeout(() =>{
  	this.loadReview().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }*/

  loadReview(){

    this.serviceReviews.getRecensioniAlbum(this.id, 'recensionialbum.php').subscribe(response => {
    this.reviews = response;
    });
 
}

addreview(id, id_brano){
  console.log(id, id_brano);
    if(id != undefined)
      this.router.navigate(['/tabs/addreview/album/' + id ]);
    if(id_brano != undefined)
      this.router.navigate(['/tabs/addreview/brano/' + id_brano ]);
}

loadReviewsBrani(){
  	
  this.serviceReviews.getRecensioniBrani(this.id_brano, 'recensionibrani.php').subscribe(response => {
    this.reviews = response;
    });
}

addReviewBrano(id_brano){
  	this.router.navigate(['/tabs/addreview/brano/' + id_brano ]);
}

}



