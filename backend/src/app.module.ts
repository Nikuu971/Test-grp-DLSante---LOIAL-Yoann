import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { BackModule } from './back/back.module';
import { VehiculeController } from './vehicule/vehicule.controller';
import { VehiculeService } from './vehicule/vehicule.service';

@Module({
  imports: [BackModule, TypeOrmModule.forRoot()],
  controllers: [VehiculeController],
  providers: [VehiculeService],
})
export class AppModule {}
