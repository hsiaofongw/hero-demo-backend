import { Module } from '@nestjs/common';
import { MarkdownController } from './controllers/markdown/markdown.controller';
import { MarkdownParseFactory } from './factories/markdown-parse.factory';
import { FrontMatterService } from './services/front-matter/front-matter.service';
import { MarkdownParseService } from './services/markdown-parse/markdown-parse.service';
import { MarkdownService } from './services/markdown/markdown.service';

@Module({
  providers: [
    MarkdownService,
    {
      provide: MarkdownParseService,
      useFactory: () => MarkdownParseFactory.makeMarkdownParseService(),
    },
    FrontMatterService,
  ],
  controllers: [MarkdownController],
})
export class MarkdownModule {}
