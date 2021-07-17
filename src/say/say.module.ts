import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { SaysController } from './controllers/says/says.controller';
import { Say, SaySchema } from './entities/say.entity';
import { SayService } from './services/say/say.service';

@Module({
  controllers: [SaysController],
  providers: [SayService],
  imports: [
    MongooseModule.forFeature([{ name: Say.name, schema: SaySchema }]),
    AuthModule,
  ],
})
export class SayModule {}
