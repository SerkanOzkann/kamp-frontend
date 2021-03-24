import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

 // value degistirmek istenen deger, 2. ilk parametre
  transform(value: number, rate:number ): number {
    return value + (value*rate/100);
  }

}
//elimizde ki veriyi görsel olarak daha farklı göstermemizi sağlar.pipe boru demektir.