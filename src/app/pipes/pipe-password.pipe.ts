import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePassword',
  standalone: true
})
export class PipePasswordPipe implements PipeTransform {

  transform(value: string, ) :string{
    

    let newValue:string = "";

    for (let i = 0; i < value.length; i++) {
      newValue += "*";
      
    }

    return newValue;

  }

}
