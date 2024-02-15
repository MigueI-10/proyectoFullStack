import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrimeraMayus',
  standalone: true
})
export class PipePrimeraMayusPipe implements PipeTransform {

  transform(value: string): string {

    if (!value) {
      return '';
    }
    //splitea y crea un mapa con las palabras que vengan, de cada una coge la primera y la pone mayus
    //tras esto las vuelve a juntar
    return value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

}
