import { Injectable } from '@nestjs/common';
import { FileService } from '../file/file.service';
import { ConfigService } from '@nestjs/config';
import OSS from 'ali-oss';

let endpoint = process.env?.END_POINT || 'unknowEndPoint';
let accessKeyId = process.env?.ACCESS_KEY_ID || 'unknowAccessKeyId';
let accessKeySecret = process.env?.ACCESS_KEY_SECRET || 'unknowAccessKeySecret';
let bucket = process.env?.BUCKET_NAME || 'unknowBucketName';

@Injectable()
export class AliyunOssFileService implements FileService {
  constructor(private configureService: ConfigService) {}

  getDevConfig(): void {
    // console.log({
    //   endpoint: this.configureService.get('END_POINT'),
    //   accessKeyId: this.configureService.get('ACCESS_KEY_ID'),
    //   accessKeySecret: this.configureService.get('ACCESS_KEY_SECRET'),
    //   bucket: this.configureService.get('BUCKET_NAME'),
    // });

    endpoint = this.configureService.get('END_POINT') ?? endpoint;
    accessKeyId = this.configureService.get('ACCESS_KEY_ID') ?? accessKeyId;
    accessKeySecret =
      this.configureService.get('ACCESS_KEY_SECRET') ?? accessKeySecret;
    bucket = this.configureService.get('BUCKET_NAME') ?? bucket;

    // console.log({ endpoint, accessKeySecret, accessKeyId, bucket });
  }

  async getFile(fileName: string): Promise<Buffer> {
    // console.log({ endpoint, accessKeySecret, accessKeyId, bucket });

    this.getDevConfig();

    // console.log({ endpoint, accessKeySecret, accessKeyId, bucket });

    const client = new OSS({
      endpoint,
      accessKeyId,
      accessKeySecret,
      bucket,
    });

    const content = (await client
      .get(fileName)
      .then((d) => d.content)) as Buffer;

    return content;
  }
}
