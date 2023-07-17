import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService
{
  private article$ = new BehaviorSubject<Article[]>([]);
  constructor(private httpService: HttpService)
  {
    httpService.getAllPost().subscribe(data => this.article$.next(data));
  }

  public getArticles (): Observable<Article[]>
  {
    return this.article$;
  }

  public getArticleById (id: string): Observable<Article | undefined>
  {
    return this.article$.pipe(map(articles => articles.find(article => article.id === id)));
  }
}

export interface Article
{
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  publishDate: string;
  tags: string[]
}