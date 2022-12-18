import { TimeSlot } from 'src/time-slots/entities/time-slot.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: null })
  usersId: number;

  @OneToMany((type) => TimeSlot, (timeSlot: TimeSlot) => timeSlot.workers, {
    cascade: ['insert', 'update'],
  })
  timeSlots: TimeSlot[];

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
