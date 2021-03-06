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

  anggota: any;
  username: string;
  user_id: number;

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


  ionViewWillEnter(){

    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.user_id = this.anggota.user_id;
      this.username = this.anggota.username;
      console.log(res);
    });

  	this.reviews = [];
    this.start = 0;
    
    if(this.brani != undefined)
      this.loadReviewsBrani();
    else
      this.loadReview();
      

  }

  loadReview(){

    this.serviceReviews.getRecensioniAlbum(this.id, 'recensionialbum.php').subscribe(response => {
    this.reviews = response;
    });
 
}

addreview(id, id_brano){
  if(this.username != undefined){
  console.log(id, id_brano);
    if(id != undefined)
      this.router.navigate(['/tabs/addreview/album/' + id ]);
    if(id_brano != undefined)
      this.router.navigate(['/tabs/addreview/brano/' + id_brano ]);
  }else{
    this.router.navigate(['/login']);
  }
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



