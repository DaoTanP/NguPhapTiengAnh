import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
{
  protected posts$ = this.articleService.getArticles();

  constructor(private articleService: ArticleService, private router: Router) { }
}
