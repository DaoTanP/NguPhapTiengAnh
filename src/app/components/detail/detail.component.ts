import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailComponent
{
  protected blogPost$ = this.route.paramMap.pipe(switchMap(params =>
    this.articleService.getArticleById(params.get('id') || 'not-found'))
  );

  constructor(private articleService: ArticleService, private route: ActivatedRoute)
  {
  }
}
