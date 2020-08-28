import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import {Router, ActivatedRoute} from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  items: any = [];

  constructor(private router: Router, private postPvdr: PostProvider,
  	private actRoute: ActivatedRoute, private serviceNews: NewsService) { 

    }

  ngOnInit() {
    
    this.items = [];
    this.loadNews();
   
  }

  loadNews(){

  		this.serviceNews.getNews('allnews.php').subscribe(response => {

        this.items = response;
  			
  		});
  }


}
