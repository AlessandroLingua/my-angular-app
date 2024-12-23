import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(names: string[], filterText: string): string[] {
    if (!filterText) return names; // Return all if no filter text
    return names.filter(name =>
      name.toLowerCase().includes(filterText.toLowerCase())
    );
  }

}
