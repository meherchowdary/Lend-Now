function goToScreen(screenId) {
    document.location.href = `${screenId}.html`;
}

function goToInfoPage() {
    window.location.href = 'info.html';
}
function goToPage() {
    window.location.href = 'address.html';
}

function updateLoanAmountValue() {
    const loanAmount = document.getElementById('loan-amount').value;
    document.getElementById('loan-amount-value').textContent = `₹${loanAmount}`;
}

document.getElementById('loan-info-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const loanAmount = document.getElementById('loan-amount').value;
    const loanTenure = document.getElementById('loan-tenure').value;

    const response = await fetch('/apply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ loanAmount, loanTenure })
    });

    const result = await response.json();
    console.log(result);
});
