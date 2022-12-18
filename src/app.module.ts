import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [UsersModule, WorkerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
