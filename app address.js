function goToScreen(screenId) {
    document.location.href = `${screenId}.html`;
}
function goToAdd() {
    window.location.href = 'employee.html';
}

function copyCurrentAddress() {
    const isChecked = document.getElementById('same-as-current').checked;

    if (isChecked) {
        document.getElementById('permanent-address-line1').value = document.getElementById('current-address-line1').value;
        document.getElementById('permanent-address-line2').value = document.getElementById('current-address-line2').value;
        document.getElementById('permanent-city').value = document.getElementById('current-city').value;
        document.getElementById('permanent-state').value = document.getElementById('current-state').value;
        document.getElementById('permanent-pincode').value = document.getElementById('current-pincode').value;
    } else {
        document.getElementById('permanent-address-line1').value = '';
        document.getElementById('permanent-address-line2').value = '';
        document.getElementById('permanent-city').value = '';
        document.getElementById('permanent-state').value = '';
        document.getElementById('permanent-pincode').value = '';
    }
}

document.getElementById('address-details-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const currentAddress = {
        line1: document.getElementById('current-address-line1').value,
        line2: document.getElementById('current-address-line2').value,
        city: document.getElementById('current-city').value,
        state: document.getElementById('current-state').value,
        pincode: document.getElementById('current-pincode').value
    };

    const permanentAddress = {
        line1: document.getElementById('permanent-address-line1').value,
        line2: document.getElementById('permanent-address-line2').value,
        city: document.getElementById('permanent-city').value,
        state: document.getElementById('permanent-state').value,
        pincode: document.getElementById('permanent-pincode').value
    };

    const addressProof = document.getElementById('address-proof').files[0];

    // Prepare the data to be sent to the server
    const formData = new FormData();
    formData.append('currentAddress', JSON.stringify(currentAddress));
    formData.append('permanentAddress', JSON.stringify(permanentAddress));
    formData.append('addressProof', addressProof);

    const response = await fetch('/address-details', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    console.log(result);
    if (result.success) {
        goToScreen('employment-info');
    } else {
        alert('Failed to submit address details');
    }
});
