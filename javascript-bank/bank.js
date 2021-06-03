/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || !Number.isInteger(balance)) {
    return null;
  } else {
    var accountNumber = new Account(this.nextAccountNumber, holder);
    accountNumber.deposit(balance);
    this.accounts.push(accountNumber);
    this.nextAccountNumber++;
  }
  return accountNumber.number;
};
// need to find account object inside this.accounts array
// the object account.number needs to match the value of number
// number is the parameter
// need to loop through this.accounts
// if no match return null
// if there is a match return account object.
// account object is this.accounts[i]
// account.number of the object is
Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};
// need all accounts
// need all amounts from each account
// add the amount of all accounts together
Bank.prototype.getTotalAssets = function () {
  var balance = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    balance += this.accounts[i].getBalance();
  }
  return balance;
};
