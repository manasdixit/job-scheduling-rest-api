import { Worker } from 'src/worker/entities/worker.entity';
import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

export class TimeSlot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  workerId: number;

  @Column({ default: null })
  day: string;

  @OneToMany((type) => Worker, (workers: Worker) => workers.timeSlots, {
    cascade: ['insert', 'update'],
  })
  workers: Worker[];

  @Column({ default: null })
  fromHour: string;

  @Column({ default: null })
  toHour: string;
}
