import { dataSource } from "@config/TestDatabase";
import { Account, AccountCreateDTO, AccountType } from "./account.entity";
import { AccountsRepository } from "./account.repository";

describe("account-repository", () => {
  let accountRepo: AccountsRepository = new AccountsRepository();

  it("should have access to a dB connection", () => {
    expect(accountRepo._repo).toBeDefined();
  });

  it("should have a method called createAccount", () => {
    expect(accountRepo.createAccount).toBeDefined();
  });

  it("should call the create method on the database when invoking createAccount on accountRepository", async (done) => {
    accountRepo._repo = dataSource.getRepository(Account);

    const spy = jest.spyOn(accountRepo._repo, "create");

    let accountData: AccountCreateDTO = {
      type: AccountType.SAVINGS,
      number: "1234",
    };
    await accountRepo.createAccount(accountData);

    expect(spy).toHaveBeenCalled();
    done();
  });
});
