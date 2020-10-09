import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackController } from './back.controller';
import { BackService } from './back.service';
import { UserEntity } from './entities/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [BackController],
  providers: [BackService],
})
export class BackModule {}
