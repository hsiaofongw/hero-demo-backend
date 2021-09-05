import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { IMetaData } from '../../interfaces';
import { metadata as _metadata } from '../../external/blog-content-center/data/metadata';

@Injectable()
export class LocalMetadataProviderService {
  getMetadata(): Observable<IMetaData> {
    return of(_metadata);
  }
}
