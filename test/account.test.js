const account = require("../src/account");

beforeEach(() => {
  // reset account balance to 500 after each set of tests
  account.balance = 500;
});

describe("getBalance", () => {
  it("should return the account balance of 500 before any operations", () => {
    expect(account.getBalance()).toEqual(500);
  });

  it("should return the account balance of 5000 after balance has been set to 5000", () => {
    account.balance = 5000;
    expect(account.getBalance()).toEqual(5000);
  });
});

describe("deposit", () => {
  it("should allow deposits when balance < 5000", () => {
    account.deposit(500);
    expect(account.getBalance()).toEqual(1000);
  });

  it("should not allow deposits when balance >= 5000", () => {
    account.balance = 5001;
    account.deposit(500);
    expect(account.getBalance()).toEqual(5001);
  });
});

describe("withdraw", () => {
  it("should allow withdrawals when balance > 0", () => {
    account.withdraw(500);
    expect(account.getBalance()).toEqual(0);
  });

  it("should not allow withdrawals when balance <= 0", () => {
    account.balance = 0;
    account.withdraw(500);
    expect(account.getBalance()).toEqual(0);
  });

  it("should not allow bank balance to drop below 0", () => {
    account.withdraw(5000);
    expect(account.getBalance()).toEqual(0);
  });
});
