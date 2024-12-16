const user = {
    username: "1",
    password: "1",
}

const loginForm = document.getElementById('login-form');
const loginSection = document.getElementById('login-section');
const dashboard = document.getElementById('dashboard');
const userDisplay = document.getElementById('user-display');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === user.username && passwordInput === user.password) {
        loginSection.style.display = 'none';
        dashboard.style.display = 'block';
        userDisplay.textContent = user.username;
        updateBalance();
    } else {
        alert("Onjuiste gebruikersnaam of wachtwoord!");
    }
});

document.getElementById('addAccountBtn').addEventListener('click', () => {
    const accountName = prompt("Voer de naam van de nieuwe rekening in:");
    const accountBalance = parseFloat(prompt("Voer het startsaldo in (bijv. 1000.00):")).toFixed(2);
  
    if (accountName && !isNaN(accountBalance)) {
      const accountsContainer = document.getElementById('accounts');
  
      const newAccount = document.createElement('div');
      newAccount.classList.add('account');
  
      const accountNameSpan = document.createElement('span');
      accountNameSpan.classList.add('account-name');
      accountNameSpan.textContent = accountName;
  
      const accountBalanceSpan = document.createElement('span');
      accountBalanceSpan.classList.add('account-balance');
      accountBalanceSpan.textContent = `€${accountBalance}`;
  
      newAccount.appendChild(accountNameSpan);
      newAccount.appendChild(accountBalanceSpan);
      accountsContainer.appendChild(newAccount);
    } else {
      alert("Ongeldige invoer. Probeer opnieuw.");
    }
  });
  