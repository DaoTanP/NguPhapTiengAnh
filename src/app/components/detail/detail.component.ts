import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailComponent
{
  protected blogPost$ = this.route.paramMap.pipe(switchMap(params =>
    this.httpService.getPost(params.get('id') || 'not-found'))
  );

  constructor(private httpService: HttpService, private route: ActivatedRoute)
  {
  }
}
