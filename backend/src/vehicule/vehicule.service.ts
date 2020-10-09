import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BackService } from 'src/back/back.service';
import { UserEntity } from 'src/back/entities/user.entity';
import { VehiculeDto } from 'src/dtos/vehicule.dto';
import { Repository } from 'typeorm';
import { VehiculeEntity } from './vehicule.entity/vehicule.entity';

@Injectable()
export class VehiculeService {

    constructor(
        @InjectRepository(VehiculeEntity)
        private readonly vehiculeRepository: Repository<VehiculeEntity>
    ){}

    async insertVehicule(vehiculeDetails: VehiculeDto): Promise<VehiculeEntity>{
        const {marque, model, userID}=vehiculeDetails;
        const vehicule=new VehiculeEntity();
        vehicule.marque=marque;
        vehicule.model=model;
        vehicule.user=await UserEntity.findOne(userID);
        await vehicule.save();
        return vehicule;
    }

    async removeVehicule(vehiculeid:number){
        const vehicule = await this.vehiculeRepository.findOne(vehiculeid);
        if(!vehicule){
            return null;
        }else{
            this.vehiculeRepository.remove(vehicule);
            return vehicule;
        }
    }

    async updateVehicule(vehiculeid: number, vehiculeDto: VehiculeDto){
        const vehicule=await this.vehiculeRepository.findOne(vehiculeid);
        if(!vehicule){
            return null;
        }
        else{
            await this.vehiculeRepository.update(vehiculeid,vehiculeDto);
            return await this.vehiculeRepository.findOne(vehiculeid);
        }
    }
}
