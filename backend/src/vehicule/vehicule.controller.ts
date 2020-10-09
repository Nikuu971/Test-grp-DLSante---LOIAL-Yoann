import { Controller, Delete, Post, Put } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { HttpStatus } from '@nestjs/common/enums/http-status.enum';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { Logger } from '@nestjs/common/services/logger.service';
import { VehiculeDto } from 'src/dtos/vehicule.dto';
import { VehiculeService } from './vehicule.service';

@Controller('vehicule')
export class VehiculeController {
    
    constructor(private readonly vehiculeService: VehiculeService){}

    @Post()
  async createUser(@Body() vehiculeDto:VehiculeDto) {
    Logger.log('create an vehicule', 'VehiculeController');
    const vehicule= await this.vehiculeService.insertVehicule(vehiculeDto);
    if(vehicule){
      return vehicule;
    }
    else{
      throw new HttpException('Not created', HttpStatus.NOT_MODIFIED);
    }
  }

  @Put('vehiculeid')
  async updateVehicule(@Param('vehiculeid') vehiculeid, @Body() vehiculeDto){
      const vehicule = await this.vehiculeService.updateVehicule(vehiculeid, vehiculeDto);
      if(vehicule){
          return vehicule;
      }
      else {
        throw new HttpException('Not modified', HttpStatus.NOT_MODIFIED);
      }
  }

  @Delete('vehiculeid')
  async remove(@Param('vehiculeid') vehiculeid){
      Logger.log('Delete an vehicule', 'VehiculeController');
      const vehicule = await this.vehiculeService.removeVehicule(vehiculeid);
      if(vehicule){
          return vehicule;
      }
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }

}
