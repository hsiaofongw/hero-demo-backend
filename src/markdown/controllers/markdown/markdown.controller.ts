import { Controller, Get, Header } from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { FrontMatterService } from 'src/markdown/services/front-matter/front-matter.service';
import { MarkdownService } from 'src/markdown/services/markdown/markdown.service';

@Controller('markdown')
export class MarkdownController {
  constructor(
    private markdownService: MarkdownService,
    private frontMatterService: FrontMatterService,
  ) {}

  @Get('parse')
  getParsedMarkdown() {
    return this.markdownService.parse('# Hello');
  }

  @Get('parse-front-matter')
  getParsedFrontMatter() {
    return this.frontMatterService.parseFrontMatter(
      '---\ntitle: Front Matter\n---\nThis is content.',
    );
  }
}
