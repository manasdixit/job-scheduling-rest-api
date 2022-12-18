import { IsString } from '@nestjs/class-validator';

export class CreateWorkerDto {
  @IsString()
  name: string;
}
