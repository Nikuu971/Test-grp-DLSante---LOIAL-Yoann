import {
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserDto } from 'src/dtos/user.dto';
import { VehiculeDto } from 'src/dtos/vehicule.dto';
import { BackService } from './back.service';

@Controller('back')
export class BackController {

  constructor(private readonly backService: BackService){}

  @Get()
  getAll() {
    Logger.log('get all users', 'BackController');
    return this.backService.getUser();
  }

  @Get(':userid')
  async getOne(@Param('userid') userid) {
    Logger.log('get one user', 'BackController');
    const user = await this.backService.getOneUser(userid);
    if(user){
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  @Post()
  async createUser(@Body() userDto:UserDto) {
    Logger.log('create an user', 'BackController');
    const user= await this.backService.createUser(userDto);
    if(user){
      return user;
    }
    else{
      throw new HttpException('Not created', HttpStatus.NOT_MODIFIED);
    }
  }
  
  @Put(':userid')
  async update(@Param('userid') userid, @Body() userDto) {
    Logger.log('update an user', 'BackController');
    const user= await this.backService.updateUser(userid, userDto);
    if(user){
      return user;
    }
    else{
      throw new HttpException('Not modified', HttpStatus.NOT_MODIFIED);
    }
  }

  @Delete(':userid')
  remove(@Param('userid') userid) {
    Logger.log('delete an user', 'BackController');
    return 'detele user';
  }
}
