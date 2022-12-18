import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async create(createUserData: CreateUserDto) {
    console.log(createUserData);
    const newUser = this.usersRepository.create(createUserData);
    return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserData: UpdateUserDto) {
    return this.usersRepository.update({ id: id }, updateUserData);
  }

  remove(id: number) {
    return this.usersRepository.softDelete({ id: id });
  }
}
