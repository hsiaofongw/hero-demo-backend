import { Module } from '@nestjs/common';
import { MarkdownParseFactory } from './factories/markdown-parse.factory';
import { FrontMatterService } from './services/front-matter/front-matter.service';
import { MarkdownParseService } from './services/markdown-parse/markdown-parse.service';
import { MarkdownService } from './services/markdown/markdown.service';

/** 此模块提供 Markdown 解析以及 Front-Matter 解析服务 */
@Module({
  providers: [
    MarkdownService,
    {
      provide: MarkdownParseService,
      useFactory: () => MarkdownParseFactory.makeMarkdownParseService(),
    },
    FrontMatterService,
  ],
  controllers: [],
  exports: [MarkdownService, MarkdownParseService, FrontMatterService],
})
export class MarkdownModule {}
