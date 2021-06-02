/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  } else {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  } else {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  }
};
// create balance variable
// we want a for loop to go through transactions array
// need to add all deposits
// then subtract all withdrawals
// use an if statement to check if its a deposit or withdrawal
// need to add all deposits to balance variable and subtract all withdrawals from
// balance variable
// then return balance variable
Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
