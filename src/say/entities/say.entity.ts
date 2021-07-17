import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ISay } from '../interface';
import { Document } from 'mongoose';

@Schema()
export class Say implements ISay {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  authorId: string;

  @Prop({ required: true })
  createdAt: number;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  voteFors: number;

  @Prop({ required: true })
  voteAgainsts: number;
}

export type SayDocument = Say & Document;

export const SaySchema = SchemaFactory.createForClass(Say);
