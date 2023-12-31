import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent
{
  protected switchThemeFunction: any = undefined;
  protected setThemeFunction: any = undefined;
  protected getThemeFunction: any = undefined;
  protected isDark: boolean = false;

  constructor(private dataService: DataService, private router: Router)
  {
    this.switchThemeFunction = this.dataService.getData('switchTheme');
    this.setThemeFunction = this.dataService.getData('setTheme');
    this.getThemeFunction = this.dataService.getData('getTheme');
    this.isDark = this.getTheme();
  }

  toggleTheme ()
  {
    this.switchThemeFunction();
    this.isDark = this.getTheme();
  }

  setTheme (theme: string)
  {
    this.setThemeFunction(theme);
    this.isDark = this.getTheme();
  }

  getTheme ()
  {
    return this.getThemeFunction() == 'dark' ? true : false;
  }
}