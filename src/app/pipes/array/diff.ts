import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'diff'})
export class DiffPipe implements PipeTransform {

  transform(_input: any, ...args: any[], key): any[] {
    const input = key ? _.map(_input, key) : _input;
    if (!Array.isArray(input)) {
      return input;
    }

    return args.reduce((d, c) => d.filter((e: any) => !~c.indexOf(e)), input);
  }
}
