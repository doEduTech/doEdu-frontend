import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '@env/environment';

@Pipe({ name: 'ipfs' })
export class IPFSPipe implements PipeTransform {
  transform(cid: string) {
    return `${environment.apiUrl}/ipfs/${cid}`;
  }
}
