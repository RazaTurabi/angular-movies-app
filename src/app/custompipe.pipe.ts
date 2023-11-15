import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string,replace_by:string=":"): string {
   let updated_value=value.replace("-",replace_by)
    return updated_value;
  }

}
