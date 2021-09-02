import { Injectable, Scope } from '@nestjs/common';
import { MarkdownParseService } from '../markdown-parse/markdown-parse.service';
import type { Heading, Code, Link, Root } from 'mdast';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// { scope: Scope.DEFAULT } 表示单例
@Injectable({ scope: Scope.DEFAULT })
export class MarkdownService {
  constructor(private markdownParseService: MarkdownParseService) {}

  parse(markdownText: string): Observable<Root> {
    return this.markdownParseService
      .parse(markdownText)
      .pipe(map((parsedJSON) => JSON.parse(parsedJSON) as Root));
  }
}
