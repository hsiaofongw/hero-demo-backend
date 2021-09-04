import { Injectable } from '@nestjs/common';
import matter from 'gray-matter';

@Injectable()
export class FrontMatterService {
  parseFrontMatter(mixedMarkdown: string): {
    content: string;
    data: Record<string, unknown>;
  } {
    return matter(mixedMarkdown);
  }
}
