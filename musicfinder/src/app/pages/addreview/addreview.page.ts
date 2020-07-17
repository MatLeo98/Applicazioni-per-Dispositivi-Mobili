import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';


@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.page.html',
  styleUrls: ['./addreview.page.scss'],
})
export class AddreviewPage implements OnInit {

  id: number = 0;
  titolo: string = "";
  valutazione: number;
  testo: string ="";
  id_album: number;
  id_brano: number = 0;

  anggota: any;
  username: string;
  user_id: number;


  constructor(
    private postPvdr: PostProvider,
  	private router: Router,
    private actRoute: ActivatedRoute,
    private storage: Storage) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.id_brano = data.id_brano;
      /*this.titolo = data.titolo;
      this.valutazione = data.valutazione;
      this.testo = data.testo;*/
      
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

  }

  createdProses(){
    console.log(this.id);
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'addreview',
  			titolo : this.titolo,
        valutazione : this.valutazione,
        testo : this.testo,
        id_album : this.id,
        username : this.username,
        
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			//this.router.navigate(['/customer']);  Se riusciamo ad implementare il back button, tornare alla pagina precedente
  			console.log('OK');
  		});
  	});

  }

  createReviewBrano(){

    console.log(this.id_brano);
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'addReviewBrano',
  			titolo : this.titolo,
        valutazione : this.valutazione,
        testo : this.testo,
        id_brano : this.id_brano,
        username : this.username,
        
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			//this.router.navigate(['/customer']);  Se riusciamo ad implementare il back button, tornare alla pagina precedente
  			console.log('OK');
  		});
  	});

  }


}
