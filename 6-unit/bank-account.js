'use strict'

function BankAccount(acctNum, acctOwner, checkBalance, saveBalance, acctType) {
    this.acctNum = acctNum;
    this.acctOwner = acctOwner;
    this.checkBalance = checkBalance;
    this.saveBalance = saveBalance;
    this.acctType = acctType;
}

BankAccount.prototype.checkTransfer = function(amount) {
    if (this.checkBalance - amount >= 0) {
        this.checkBalance -= amount;
    }
};

(function _test() {
    let account = new BankAccount(0, 0, 100);

    account.checkTransfer(50);
    if (account.checkBalance !== 50) {
        throw new Error('checkTransfer cannot transfer valid amount')
    }

    account.checkTransfer(51);
    if (account.checkBalance !== 50) {
        throw new Error('checkTransfer doesnt guard against overdraft')
    }

    console.log('2 tests passed')
})()
