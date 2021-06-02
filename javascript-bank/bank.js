/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (balance < 0 || !Number.isInteger(balance)) {
      return null;
    } else {
      var accountNumber = new Account(this.nextAccountNumber, holder);
      accountNumber += Bank.accounts[i].deposit(balance);
      this.accounts.push(accountNumber);
      this.nextAccountNumber++;
    }
  }
  return accountNumber;
};

Bank.prototype.getAccount = function (number) {

};

Bank.prototype.getTotalAssets = function () {

};
