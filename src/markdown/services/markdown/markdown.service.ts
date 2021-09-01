import { Injectable, Scope } from '@nestjs/common';
import { MarkdownParseService } from '../markdown-parse/markdown-parse.service';

// { scope: Scope.DEFAULT } 表示单例
@Injectable({scope: Scope.DEFAULT})
export class MarkdownService {
  constructor(private markdownParseService: MarkdownParseService) {}

  parse(markdownText: string) {
    // const unified = await import('unified').then(m => m.unified);
    // const remarkParse = await import ('remark-parse').then(m => m.default);
    // const tree = await unified().use(remarkParse).process('# HELLO!');

    // console.log(tree);

    return this.markdownParseService.parse(markdownText);
  }
}
