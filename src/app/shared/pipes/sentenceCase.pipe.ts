import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sentenceCase' })
export class SentenceCase implements PipeTransform {
  transform(camelCase: string) {
    return camelCase.replace(/([A-Z])/g, (match) => ` ${match}`).replace(/^./, (match) => match.toUpperCase());
  }
}
