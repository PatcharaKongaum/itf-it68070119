let logCount = 0;
function addLog(message, isError = false) {
    logCount++;
    let logBox = document.getElementById("log");
    let entry = document.createElement("p");
    entry.textContent = `${logCount}, ${message}`;
    if (isError) {
        entry.classList.add("error"); // ถ้า error จะเป็นสีแดง
    }
    logBox.appendChild(entry);
    logBox.scrollTop = logBox.scrollHeight;
}

function updateBalance() {
    let acc = document.getElementById("accountBalance").value;
    let cash = document.getElementById("cashBalance").value;
    addLog(`Current account balance: ${acc}, Current cash balance: ${cash}`);
}

function bankOperation() {
    let acc = parseInt(document.getElementById("accountBalance").value);
    let cash = parseInt(document.getElementById("cashBalance").value);
    let amount = parseInt(document.getElementById("amount").value);
    let op = document.getElementById("operation").value;
    if (amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }
    if (op === "deposit") {
        if (cash >= amount) {
            acc += amount;
            cash -= amount;
            addLog(`Current account balance: ${acc}, Current cash balance: ${cash}`);
        } else {
            addLog("Couldn't deposit entered balance. (Insufficient cash balance)", true);
        }
    } else if (op === "withdraw") {
        if (acc >= amount) {
            acc -= amount;
            cash += amount;
            addLog(`Current account balance: ${acc}, Current cash balance: ${cash}`);
        } else {
            addLog("Couldn't withdraw entered balance. (Insufficient account balance)", true);
        }
    }
    document.getElementById("accountBalance").value = acc;
    document.getElementById("cashBalance").value = cash;
}

function clearLog() {
    document.getElementById("log").innerHTML = "";
    logCount = 0;
}