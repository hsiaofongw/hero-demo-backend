import { Controller, Get, Header } from '@nestjs/common';
import { MarkdownService } from 'src/markdown/services/markdown/markdown.service';

@Controller('markdown')
export class MarkdownController {
  constructor(private markdownService: MarkdownService) {}

  @Get()
  @Header('Content-Type', 'text/plain')
  getParsedMarkdown() {
    return this.markdownService.parse('# Hello');
  }
}
