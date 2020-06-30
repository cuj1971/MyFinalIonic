import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colour'
})
export class ColourPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    switch (value) {
      case "0":
        return "green";
        break;
      case "1":
        return "yellow";
        break;
      case "2":
        return "orange";
        break;
      case "3":
        return "red";
        break;
      default:
        return null;
        break;
    }

  }

}
