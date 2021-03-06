import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.module';
import { CatsModule } from './modules/cat/cat.module';

@Module({
  imports: [DatabaseModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
