import { Pipe, PipeTransform } from '@angular/core';
import { MainMenuItem } from 'src/app/models/system/menu';

@Pipe({
  name: 'mainMenuHasChildren'
})
export class MainMenuHasChildrenPipe implements PipeTransform {

  transform(value: MainMenuItem): boolean {
      if((value.children != null || value.children != undefined) && value.children.length > 0) {
        return true;
      } else {
        return false;
      }
  }

}
