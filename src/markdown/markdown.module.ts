import { Module } from '@nestjs/common';
import { MarkdownController } from './controllers/markdown/markdown.controller';
import { MarkdownParseFactory } from './factories/markdown-parse.factory';
import { MarkdownParseService } from './services/markdown-parse/markdown-parse.service';
import { MarkdownService } from './services/markdown/markdown.service';

@Module({
  providers: [
    MarkdownService,
    {
      provide: MarkdownParseService,
      useFactory: () => MarkdownParseFactory.makeMarkdownParseService(),
    },
  ],
  controllers: [MarkdownController],
})
export class MarkdownModule {}
