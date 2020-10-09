import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../back/entities/user.entity';

@Entity()
export class VehiculeEntity {
  save() {
      throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn({ name: 'vehicule_id' })
  id: number;

  @Column({ type: 'text' })
  marque: string;

  @Column({type:'text'})
  model: string;

  @ManyToOne(type=>UserEntity, user=>user.vehicules)
  user:UserEntity[]
}
