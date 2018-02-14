// let balance = 500.00;
class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
  get balance() {
    let balance = 0;
    for (let item of this.transactions) {
      balance += item;
    }
    return balance;
  }
  isAllowed(input, accountBalance) {
    if ((accountBalance + input) < 0) {
      return false;
    } else {
      return true;
    }
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;

  }
  commit() {
    let test = this.account.isAllowed(this.value, this.account.balance);
    if (test === true) {
      this.time = new Date();
      this.account.addTransaction(this.value, this.time);
    } else {
      console.log('Funds were found to be insufficient for the following transaction:');
    }
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction{
  get value() {
    return this.amount;
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('snow-patrol');

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);


console.log('Balance:', myAccount.balance);
