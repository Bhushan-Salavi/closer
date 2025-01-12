//Encapsulating Bank AccountusingClosures.js
function createBankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit: function (amount) {
        balance += amount;
        return balance;
      },
    widraw:function(widrawamount){
   balance -= widrawamount;
   return balance
  },
      getBalance: function () {
        return balance;
      }
    };
  }
  
  let account = createBankAccount(100);
  console.log(account.getBalance());  
  console.log(account.deposit(50));   
  console.log(account. widraw(10)); 