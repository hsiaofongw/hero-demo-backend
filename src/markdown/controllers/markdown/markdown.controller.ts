import { Controller, Get, Header } from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { MarkdownService } from 'src/markdown/services/markdown/markdown.service';

@Controller('markdown')
export class MarkdownController {
  constructor(private markdownService: MarkdownService) {}

  @Get()
  getParsedMarkdown() {
    return this.markdownService.parse('# Hello');
  }
}
