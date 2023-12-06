class BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    this._accountHolderName = accountHolderName;
  }

  getBalance() {
    return this._balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    this._balance -= amount;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._balance - amount >= 0) {
      this._balance -= amount;
    } else {
      console.log("Withdrawal failed: Insufficient funds");
    }
  }
}

// Creating instances and testing methods
const checking = new CheckingAccount(123456, 1000, "John Doe");
checking.deposit(500);
console.log("Checking Account Balance:", checking.getBalance());
checking.withdraw(200);
console.log(
  "Checking Account Balance after withdrawal:",
  checking.getBalance()
);

const savings = new SavingsAccount(789012, 2000, "Jane Smith");
savings.deposit(1000);
console.log("Savings Account Balance:", savings.getBalance());
savings.withdraw(2500);
console.log("Savings Account Balance after withdrawal:", savings.getBalance());
