class BankAccount {
  constructor(initialBalance = 1000) {
    this.balance = initialBalance;
  }

  checkBalance(transferAmount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {  
        console.log(`Checking balance: Current $${this.balance}, attempting $${transferAmount}`);
        if (this.balance >= transferAmount) {
          resolve({ success: true, message: `Sufficient funds available: $${this.balance}` });
        } else {
          reject(new Error('Insufficient funds'));
        }
      }, 500);  
    });
  }

  deductAmount(transferAmount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Deducting $${transferAmount} from balance`);
        if (this.balance >= transferAmount) {
          this.balance -= transferAmount;
          resolve({ success: true, message: `Deducted $${transferAmount}. New balance: $${this.balance}` });
        } else {
          reject(new Error('Deduction failed: Insufficient funds'));
        }
      }, 500); 
    });
  }

  confirmTransaction(transferAmount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Confirming transaction of $${transferAmount}`);
        if (Math.random() > 0.1) { 
          resolve({ success: true, message: `Transaction confirmed for $${transferAmount}` });
        } else {
          reject(new Error('Confirmation failed: Network error'));
        }
      }, 500); 
    });
  }
}

function transferMoney(account, transferAmount) {
  return account.checkBalance(transferAmount)
    .then((checkResult) => {
      console.log(checkResult.message);
      return account.deductAmount(transferAmount);
    })
    .then((deductResult) => {
      console.log(deductResult.message);
      return account.confirmTransaction(transferAmount);
    })
    .then((confirmResult) => {
      console.log(confirmResult.message);
      return Promise.resolve('Transaction complete');
    })
    .catch((error) => {
      console.error('Transaction failed:', error.message);
      return Promise.reject(error.message); 
    });
}

const myAccount = new BankAccount(1000); 

transferMoney(myAccount, 200)
  .then((result) => console.log(result))  
  .catch((error) => console.error('Final error:', error));

transferMoney(myAccount, 1500)
  .then((result) => console.log(result))
  .catch((error) => console.error('Final error:', error)); 
