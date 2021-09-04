import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export abstract class MarkdownParseService {
  abstract parse(markdownText: string): Observable<string>;
}
