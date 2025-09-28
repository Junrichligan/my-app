class BankAccount {
  constructor(initialBalance = 1000) {
    this.balance = initialBalance;
  }

  // Step 1: Check balance - Simulates checking if funds are sufficient
  checkBalance(transferAmount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {  // Simulate async delay (e.g., API call)
        console.log(`Checking balance: Current $${this.balance}, attempting $${transferAmount}`);
        if (this.balance >= transferAmount) {
          resolve({ success: true, message: `Sufficient funds available: $${this.balance}` });
        } else {
          reject(new Error('Insufficient funds'));
        }
      }, 500);  // 0.5s delay
    });
  }

  // Step 2: Deduct amount - Simulates deducting from balance
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
      }, 500);  // 0.5s delay
    });
  }

  // Step 3: Confirm transaction - Simulates final confirmation (e.g., logging or sending notification)
  confirmTransaction(transferAmount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Confirming transaction of $${transferAmount}`);
        // Simulate a rare confirmation failure (e.g., network issue)
        if (Math.random() > 0.1) {  // 90% success rate
          resolve({ success: true, message: `Transaction confirmed for $${transferAmount}` });
        } else {
          reject(new Error('Confirmation failed: Network error'));
        }
      }, 500);  // 0.5s delay
    });
  }
}

// Function to simulate a transfer
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
      return Promise.reject(error.message);  // Propagate the error
    });
}

// Example usage
const myAccount = new BankAccount(1000);  // Initial balance $1000

// Test successful transfer (amount < balance)
transferMoney(myAccount, 200)
  .then((result) => console.log(result))  // "Transaction complete"
  .catch((error) => console.error('Final error:', error));

// Test failed transfer (amount > balance)
transferMoney(myAccount, 1500)
  .then((result) => console.log(result))
  .catch((error) => console.error('Final error:', error));  // "Insufficient funds"