import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum AccountType {
  CURRENT = "current",
  SAVINGS = "savings",
}

export interface IAccount {
  id: string;
  number: string;
  type: AccountType | string;
  balance: number;
  isActive: boolean;
  createdAt: Date;
}

export class AccountCreateDTO {
  number: string;
  type: AccountType;
}

@Entity()
export class Account implements IAccount {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  number: string;

  @Column({
    type: "enum",
    enum: AccountType,
    default: AccountType.SAVINGS,
  })
  type: string;

  @Column({
    type: "float",
    default: 0,
  })
  balance: number;

  @Column({ type: "boolean", default: false })
  isActive: boolean;

  @Column({
    type: "date",
    default: new Date(Date.now()),
  })
  createdAt: Date;
}
