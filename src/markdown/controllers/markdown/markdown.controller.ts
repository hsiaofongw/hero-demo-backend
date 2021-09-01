import { Controller, Get } from '@nestjs/common';
import { MarkdownService } from 'src/markdown/services/markdown/markdown.service';

@Controller('markdown')
export class MarkdownController {
  constructor(private markdownService: MarkdownService) {}

  @Get()
  getParsedMarkdown() {
    return this.markdownService.parse();
  }
}
