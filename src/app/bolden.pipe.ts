import { Pipe, PipeTransform } from '@angular/core';
import { Profile } from './profile';
import{ Repo } from './repo';

@Pipe({
  name: 'bolden'
})
export class BoldenPipe implements PipeTransform {

  transform(value:string): any {
   return value.toUpperCase();
  }

}
