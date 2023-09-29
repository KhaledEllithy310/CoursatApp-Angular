import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countVideos',
})
export class CountVideosPipe implements PipeTransform {
  transform(value: any[], ...args: unknown[]): number {
    if (!Array.isArray(value)) {
      return 0;
    }
    return value.length;
  }
}
