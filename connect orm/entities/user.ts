import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Profile } from "./profile";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  // @OneToOne(() => Profile, { cascade: true })
  // @JoinColumn()
  profile: Profile;
}

// module.exports = User;
