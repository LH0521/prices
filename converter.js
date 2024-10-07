let rates = {
    handjob: 0.50,
    jerkoff: 1.00
};

function updateRate(service) {
    const rateId = service === 'handjob' ? 'rateType1' : 'rateType2';
    const selectedRate = document.getElementById(rateId).value;
    rates[service] = parseFloat(selectedRate);
    document.getElementById(`result${service === 'handjob' ? '1' : '2'}`).innerHTML = "";
}

function convertMinutesToCost(service) {
    const minutesId = service === 'handjob' ? 'minutes1' : 'minutes2';
    const minutes = parseFloat(document.getElementById(minutesId).value);
    if (!isNaN(minutes)) {
        const cost = (minutes * rates[service]).toFixed(2);
        document.getElementById(`result${service === 'handjob' ? '1' : '2'}`).innerHTML = `Cost: $${cost}`;
    }
}

function convertCostToMinutes(service) {
    const costId = service === 'handjob' ? 'cost1' : 'cost2';
    const cost = parseFloat(document.getElementById(costId).value);
    if (!isNaN(cost)) {
        const minutes = (cost / rates[service]).toFixed(2);
        document.getElementById(`result${service === 'handjob' ? '1' : '2'}`).innerHTML = `Minutes: ${minutes}`;
    }
}

function generateConversionTable(service, tableId) {
    let tableBody = document.getElementById(tableId);
    let increments = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

    tableBody.innerHTML = "";

    increments.forEach(minutes => {
        let row = document.createElement('tr');

        let minCell = document.createElement('td');
        minCell.textContent = minutes;
        row.appendChild(minCell);

        let ratesForService = service === 'handjob' ? [0.50, 0.40, 0.30, 0.25] : [1.00, 0.90, 0.80, 0.75];

        ratesForService.forEach(rate => {
            let cell = document.createElement('td');
            let cost = (minutes * rate).toFixed(2);
            cell.textContent = `$${cost}`;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

window.onload = function () {
    generateConversionTable('handjob', 'table1');
    generateConversionTable('jerkoff', 'table2');
};
