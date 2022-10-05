import { Repository } from "typeorm";
import { Injectable } from "@decorators/di";
import { Account, AccountCreateDTO, IAccount } from "./account.entity";

import { dataSource } from "@config/Database";

@Injectable()
export class AccountsRepository {
  public _repo: Repository<Account>;

  constructor() {
    this._repo = dataSource.getRepository(Account);
  }

  async getAll() {
    return await this._repo.find({});
  }

  async createAccount(account: AccountCreateDTO) {
    return await this._repo.create(account);
  }

  // async getAllAccounts() {
}
