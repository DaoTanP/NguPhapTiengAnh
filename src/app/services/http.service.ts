import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService
{
  private readonly API_URL = 'https://api-for-english-grammar-blog-using-express.dao-tan-phattan.repl.co/data';

  constructor(private httpClient: HttpClient) { }

  public getAllPost (): Observable<any>
  {
    return this.httpClient.get(this.API_URL /*, { observe: 'response', responseType: "text" } */);
  }

  public getPost (id: string): Observable<any>
  {
    return this.httpClient.get(this.API_URL + '/' + id);
  }
}