// the PIN CODE IS : 0110

let pin = ''; 

function uploadToPin(code) {
let pinInput = document.querySelector("#pin");
pin += code;
pinInput.value += '*'; 
}


function checkPIN() {
if (pin === '0110') { 
    document.querySelector("#pin").value = "";
    document.querySelector("#pin").style.display = "none";
    document.querySelector("#options").style.display = "block";
} else {
    alert("Invalid PIN");
    clearPIN(); 
}
}

let balance = 5000; 

function clearPIN() {
let pinInput = document.querySelector("#pin");
pin = '';
pinInput.value = '';
}


function showBalance() {
    document.querySelector("#balance").style.display = "block";
    document.querySelector("#amount").textContent = balance;
}

function showDeposit() {
    document.querySelector("#deposit").style.display = "block";
}


function showWithdraw() {
    document.querySelector("#withdraw").style.display = "block";
}

function deposit() {
    let amount = parseInt(document.querySelector("#depositAmount").value);
if (amount > 0) {
    balance += amount;
    document.querySelector("#depositAmount").value = "";
    alert("Deposit successful");
} else {
    alert("Invalid amount");
}
}

function withdraw() {
    let amount = parseInt(document.querySelector("#withdrawAmount").value);
if (amount > 0 && amount <= balance) {
    balance -= amount;
    document.querySelector("#withdrawAmount").value = "";
    alert("Withdrawal successful");
} else {
    alert("Invalid amount");
}
}


function logout() {
    document.querySelector("#options").style.display = "none";
    document.querySelector("#pin").style.display = "block";
    document.querySelector("#balance").style.display = "none";
    document.querySelector("#deposit").style.display = "none";
    document.querySelector("#withdraw").style.display = "none";
    
}




