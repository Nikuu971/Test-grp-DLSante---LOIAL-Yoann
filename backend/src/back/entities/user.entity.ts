import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { VehiculeEntity } from '../../vehicule/vehicule.entity/vehicule.entity';

@Entity()
export class UserEntity {
  static findOne(userID: number): UserEntity[] | PromiseLike<UserEntity[]> {
      throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  @Column({ type: 'text' })
  nom: string;

  @Column({ type: 'text' })
  prenom: string;

  @OneToMany(type=>VehiculeEntity, vehicule=>vehicule.user)
  vehicules:VehiculeEntity[];
}
