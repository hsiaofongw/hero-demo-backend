import { Observable, of } from "rxjs";
import { MarkdownParseService } from "../services/markdown-parse/markdown-parse.service";

/**
 * 我们希望确保在一个 Application 的整个生命周期中，
 * 最多也就生产一个 MarkdownParseService, 
 * 换言之即单例。
 */
export class MarkdownParseFactory {
  static instance?: MarkdownParseService;

  static makeMarkdownParseService(): MarkdownParseService {
    if (!!MarkdownParseFactory.instance) {
      return this.instance;
    }

    console.log({dirname:__dirname});
    function MarkdownParseService() {
      function parse(markdownText: string): Observable<string> {
        return of('hello');
      }
      this.parse = parse;
    }

    MarkdownParseFactory.instance = new MarkdownParseService();

    return MarkdownParseFactory.instance;
  }
}
