import { UserEntity } from '../users/users.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../commons/base.entity';

@Entity('passwords')
export class PasswordEntity extends BaseEntity {
  @JoinColumn()
  @OneToOne(() => UserEntity)
  user: UserEntity;

  @Column({
    nullable: false,
  })
  password: string;
}
