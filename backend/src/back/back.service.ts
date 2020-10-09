import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dtos/user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class BackService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}
getUser(){
    return this.userRepository.find();
}

async getOneUser(userid:number){
    const user = await this.userRepository.findOne(userid);
    if (user){
        return user;
    }else{return null;}
}

async createUser(userDto: UserDto){
    const user= await this.userRepository.save(userDto);
    return user;
}
async updateUser(userid, userDto: UserDto){
    const user=await this.userRepository.findOne(userid);
    if(!user){
        return null;
    }
    else{
        await this.userRepository.update(userid, userDto);
        return await this.userRepository.findOne(userid);
    }
}

}
