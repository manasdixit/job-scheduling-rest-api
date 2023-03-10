import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { Worker } from './worker/entities/worker.entity';
import { WorkerModule } from './worker/worker.module';
import { TimeSlotsModule } from './time-slots/time-slots.module';

@Module({
  imports: [
    UsersModule,
    WorkerModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'jobschedules',
      entities: [User, Worker],
      synchronize: true,
    }),
    TimeSlotsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
