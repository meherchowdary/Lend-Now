function goToScreen(screenId) {
    document.location.href = `${screenId}.html`;
}

function goToScr() {
    window.location.href = 'bankdetails.html';
}

document.getElementById('employment-info-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const employmentType = document.getElementById('employment-type').value;
    const employerName = document.getElementById('employer-name').value;
    const designation = document.getElementById('designation').value;
    const workAddress = document.getElementById('work-address').value;
    const monthlyIncome = document.getElementById('monthly-income').value;
    const incomeProof = document.getElementById('income-proof').files[0];

    // Prepare the data to be sent to the server
    const formData = new FormData();
    formData.append('employmentType', employmentType);
    formData.append('employerName', employerName);
    formData.append('designation', designation);
    formData.append('workAddress', workAddress);
    formData.append('monthlyIncome', monthlyIncome);
    formData.append('incomeProof', incomeProof);

    const response = await fetch('/employment-info', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    console.log(result);
    if (result.success) {
        goToScreen('bank-details');
    } else {
        alert('Failed to submit employment and income details');
    }
});
