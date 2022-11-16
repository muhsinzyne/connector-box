import { Pipe, PipeTransform } from '@angular/core';
import { MainMenuItem } from 'src/app/models/system/menu';

@Pipe({
  name: 'mainMenuClass'
})
export class MainMenuClassPipe implements PipeTransform {

  transform(value: MainMenuItem): string {

    var classList: String[] = [];
    classList.push('menu-item');
    classList.push('me-lg-1');
    if(value.children != null && value.children.length > 0) {
      classList.push('menu-lg-down-accordion');
      classList.push('menu-dropdown');
    }
    return classList.join(' ');
  }

}
