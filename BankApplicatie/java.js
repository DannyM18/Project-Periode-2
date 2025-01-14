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

  
  //Overschrijven//
  document.getElementById("transferButton").addEventListener("click", function () {
    const fromAccount = document.getElementById("fromAccount").value;
    const toAccount = document.getElementById("toAccount").value;
    const amount = document.getElementById("amount").value;
    const messageElement = document.getElementById("message");
  
    if (fromAccount === toAccount) {
      messageElement.textContent = "Van en naar rekening kunnen niet hetzelfde zijn.";
      messageElement.className = "error-message";
      return;
    }
  
    if (amount <= 0) {
      messageElement.textContent = "Voer een geldig bedrag in.";
      messageElement.className = "error-message";
      return;
    }
  
    messageElement.textContent = `€${parseFloat(amount).toFixed(2)} is succesvol overgeschreven van ${fromAccount} naar ${toAccount}.`;
    messageElement.className = "success-message";
  });
  
  //transactiegeschiedenis
  function filterTransacties() {
    const typeFilter = document.getElementById("type").value;
    const dateFilter = document.getElementById("date").value;
    const transacties = document.querySelectorAll(".transactie");

    transacties.forEach(transactie => {
        const type = transactie.getAttribute("data-type");
        const datum = transactie.getAttribute("data-datum");

        let typeMatch = typeFilter === "alle" || type === typeFilter;
        let dateMatch = !dateFilter || datum === dateFilter;

        if (typeMatch && dateMatch) {
            transactie.style.display = "block";
        } else {
            transactie.style.display = "none";
        }
    });
}
