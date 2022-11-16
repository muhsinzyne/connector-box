import { Component, Input, OnInit } from '@angular/core';
import { MainMenuItem } from '../../../../../models/system/menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {


  @Input() menu: MainMenuItem;

  constructor(private router: Router) { }




  ngOnInit(): void {
  }

  calculateMenuItemCssClass(url: string): string {
    return checkIsActive(this.router.url, url) ? 'active' : '';
  }




}

const getCurrentUrl = (pathname: string): string => {
  return pathname.split(/[?#]/)[0];
};

const checkIsActive = (pathname: string, url: string) => {
  const current = getCurrentUrl(pathname);
  if (!current || !url) {
    return false;
  }

  if (current === url) {
    return true;
  }

  if (current.indexOf(url) > -1) {
    return true;
  }

  return false;
};
