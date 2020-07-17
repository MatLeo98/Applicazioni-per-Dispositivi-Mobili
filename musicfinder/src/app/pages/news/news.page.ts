import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  items: any = [];

  constructor(private router: Router, private postPvdr: PostProvider,
  	private actRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.items = [];
    this.loadNews();
   
  }

  loadNews(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getnews',
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let news of data.result){
          this.items.push(news);
        }
        console.log(this.items);
  			resolve(true);
  		});
  	});
  }


}
