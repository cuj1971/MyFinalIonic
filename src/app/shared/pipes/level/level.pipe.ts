import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    switch (value) {
      case "0":
        return "ok";
        break;
      case "1":
        return "not great";
        break;
      case "2":
        return "avoid";
        break;
      case "3":
        return "dangerous";
        break;
      default:
        return null;
        break;
    }

  }

}
