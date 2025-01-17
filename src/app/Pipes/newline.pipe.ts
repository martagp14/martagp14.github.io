import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newline',
  standalone:true
})
export class NewlinePipe implements PipeTransform {
  transform(value: string): string {
    var prueba = value.replace(/\n/g, '<br/>');
    return prueba;
  }
}
