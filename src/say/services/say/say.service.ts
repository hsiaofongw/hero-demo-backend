import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { CreateSayDto } from 'src/say/dtos/create-say.dto';
import { QuerySaysDto } from 'src/say/dtos/query-says.dto';
import { Say, SayDocument } from 'src/say/entities/say.entity';
import { ISay, ISayQueryResult } from 'src/say/interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SayService {
  constructor(@InjectModel(Say.name) private sayModel: Model<SayDocument>) {}

  /** 创建一条说说 */
  async createSayAsync(createSayDto: CreateSayDto) {
    const content = createSayDto.content;
    const authorId = createSayDto.authorId as string;
    const sayId = uuidv4();
    const createdAt = new Date().valueOf();
    const votes = 0;
    const voteAgainsts = 0;

    const say: ISay = {
      id: sayId,
      content,
      authorId,
      voteFors: votes,
      voteAgainsts,
      createdAt,
    };

    const createdSay = new this.sayModel(say);
    return createdSay.save();
  }

  /** 使用分页参数查询说说 */
  async getSaysAsync(querySaysDto: QuerySaysDto): Promise<ISayQueryResult> {
    const limit = querySaysDto.limit;
    const offset = querySaysDto.offset;

    const totalCounts = await this.sayModel.count().exec();
    const sayDocuments = await this.sayModel
      .find()
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .exec();

    const result: ISay[] = sayDocuments.map((document) => ({
      id: document.id.toString(),
      authorId: document.authorId,
      createdAt: document.createdAt,
      voteFors: document.voteFors,
      voteAgainsts: document.voteAgainsts,
      content: document.content,
    }));

    return {
      totalCounts,
      result,
      offset: parseInt(offset),
    };
  }

  /** 使用分页参数查询说说 */
  getSays(queryDaysDto: QuerySaysDto): Observable<ISayQueryResult> {
    return from(this.getSaysAsync(queryDaysDto));
  }
}
