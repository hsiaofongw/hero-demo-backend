import { Observable, of } from 'rxjs';
import { MarkdownParseService } from '../services/markdown-parse/markdown-parse.service';
import childProcess from 'child_process';
import path from 'path';

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

    const extSubModulePath = path.join(
      __dirname,
      '../external-incompatible-modules/markdown-process/dist/main.bundle.js',
    );

    const child = childProcess.fork(extSubModulePath);

    function MarkdownParseService() {
      function parse(markdownText: string): Observable<string> {
        return new Observable((obs) => {
          child.send(markdownText);
          child.on('message', (parsedAstJSON: string) => {
            obs.next(parsedAstJSON);
            obs.complete();
          });
        });
      }
      this.parse = parse;
    }

    MarkdownParseFactory.instance = new MarkdownParseService();

    return MarkdownParseFactory.instance;
  }
}
