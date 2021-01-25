const account = {
  balance: 500,

  getBalance() {
    return this.balance;
  },

  deposit(amount) {
    if (this.balance < 5000) {
      this.balance = this.balance + amount;
    }
  },

  withdraw(amount) {
    if (this.balance > 0 && amount <= this.balance) {
      this.balance = this.balance - amount;
    } else {
      // User wishes to withdraw more than he has available,
      // let him draw down his account completely.
      // Single-entry bookkeeping!
      this.balance = 0;
    }
  },
};

module.exports = account;
