import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  //items: String[];

  anggota: any;
  x: number;
  
  items: any = [];
  limit: number = 13; // SCEGLIERE LIMITE
  start: number = 0;
  event: string = "";
  filter: string = "";

  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController,
    private actRoute: ActivatedRoute) {

    //this.initializeItems();

   }

  /* initializeItems() {
    this.items = [
      '1. Thom Yorke',
      '2. Radiohead',
      '3. Michael Jackson',
      '4. Metallica',
      '5. Simple Minds',
      '6. Arctic Monkeys',
      '7. David Bowie',
      '8. Verdena',
      '9. White Stripes',
      '10. Jack White',
      '11. Interpol',
      '12. Jimi Hendrix',
      '13. Aerosmith',
      '14. The Doors',
      '15. The Raconteurs'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }*/

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.event = data.event;
      this.filter = data.filter;
      this.x = data.x;
      console.log(data);
    });
  }



  ionViewWillEnter(){

  	this.items = [];
    this.start = 0;
    if(this.event == undefined || this.event == "" ){
      
      if (this.x == 2)
      this.loadBrani();
      else { if(this.x == 1){
          this.loadAlbums();}
        else  { if(this.x == 0)
        this.loadArtisti();
      }
      
    }
      
    }else{
      if(this.filter == 'Album'){
      this.x = 1;
      this.searchAlbum();
      }
      if(this.filter == 'Artisti'){
        this.x=0;
        this.searchArtisti();
        }
        if(this.filter == 'Brani'){
          this.x=2;
          this.searchBrani();
          }
    }

   
  }


  showAlbum(id_album, id_artista, titolo, genere, anno, immagine, valutazione_media, descrizione, nome){
  	this.router.navigate(['/tabs/album/' + id_album + '/' + id_artista + '/' + titolo + '/' + genere + '/' + anno + '/' + immagine + '/' + valutazione_media + '/' + descrizione + '/' + nome]);
  }

  doRefresh(event){
  	setTimeout(() =>{
  		this.ionViewWillEnter();
  		event.target.complete();
  	}, 500);
  }

  loadData(event:any){
  	this.start += this.limit;
  	setTimeout(() =>{
  	this.loadAlbums().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }

  delCustomer(id){

  	let body = {
  			aksi : 'delete',
  			customer_id : id
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.ionViewWillEnter();
  		});

  }

  loadAlbums(){
    console.log(this.start);
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getalbum',
  			limit : this.limit,
  			start : this.start,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let album of data.result){
  				this.items.push(album);
  			}
  			resolve(true);
  		});
  	});
  }


  searchAlbum(){
    
  	return new Promise(resolve => {
    
  		let body = {
  			aksi : 'searchalbum',
        event : this.event,
      };
      

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let customer of data.result){
  				this.items.push(customer);
  			}
  			resolve(true);
  		});
  	});
  }

  searchArtisti(){
   
  	return new Promise(resolve => {
    
  		let body = {
  			aksi : 'searchartisti',
        event : this.event,
      };
      

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let customer of data.result){
  				this.items.push(customer);
  			}
  			resolve(true);
  		});
  	});
  }

  searchBrani(){
   
  	return new Promise(resolve => {
    
  		let body = {
  			aksi : 'searchbrani',
        event : this.event,
      };
      

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let customer of data.result){
  				this.items.push(customer);
  			}
  			resolve(true);
  		});
  	});
  }


  showArtista(id_artista, nome, storia, immart){
    this.router.navigate(['/tabs/artista/' + id_artista + '/' + nome  + '/' + storia + '/' + immart]);
  }
  
  loadArtisti(){
    return new Promise(resolve => {
      let body = {
        aksi : 'getartista',
        limit : this.limit,
        start : this.start,
      };
  
      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        for(let artista of data.result){
          this.items.push(artista);
        }
        resolve(true);
      });
    });
  }

  showBrano(id_brano, id_album, titolo, durata, valutazione_media, descrizione, testo, youtube, genere, titalb, nome, immagine){
    this.router.navigate(['/tabs/brano/' + id_brano + '/' + id_album + '/' + titolo + '/' + durata + '/' + valutazione_media + '/' + descrizione + '/' + testo + '/' + youtube + '/' + genere + '/' + titalb + '/' + nome + '/' + immagine]);
  }
  
    loadBrani(){
      return new Promise(resolve => {
        let body = {
          aksi : 'getbrano',
          limit : this.limit,
          start : this.start,
        };
  
        this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
          for(let brano of data.result){
            this.items.push(brano);
          }
          resolve(true);
        });
      });
    }

    






}
