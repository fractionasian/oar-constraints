function calculateDose1() {
    const fractions = parseFloat(document.getElementById('fractions').value);
    const targetFractions = parseFloat(document.getElementById('targetFractions').value);
    const alphaBeta1 = parseFloat(document.getElementById('alphaBeta1').value);
    const dose1 = parseFloat(document.getElementById('dose1').value);

    if (isNaN(fractions) || isNaN(alphaBeta1) || isNaN(dose1) || isNaN(targetFractions)) {
        document.getElementById('dose1Eqd2').textContent = "Invalid input";
        document.getElementById('dose1NewDose').textContent = "";
        return;
    }

    const eqd2 = dose1 * (((dose1 / fractions) + alphaBeta1) / (2 + alphaBeta1));
    const sqrtTargetFractions = Math.sqrt(targetFractions);
    const newDose = 0.5 * (
        sqrtTargetFractions * Math.sqrt((alphaBeta1 ** 2 * targetFractions) + (4 * alphaBeta1 * eqd2) + (8 * eqd2))
        - (targetFractions * alphaBeta1)
    );

    document.getElementById('dose1Eqd2').textContent = eqd2.toFixed(2);
    document.getElementById('dose1NewDose').textContent = newDose.toFixed(2);
}

function calculateDose2() {
    const fractions = parseFloat(document.getElementById('fractions').value);
    const targetFractions = parseFloat(document.getElementById('targetFractions').value);
    const alphaBeta2 = parseFloat(document.getElementById('alphaBeta2').value);
    const dose2 = parseFloat(document.getElementById('dose2').value);

    if (isNaN(fractions) || isNaN(alphaBeta2) || isNaN(dose2) || isNaN(targetFractions)) {
        document.getElementById('dose2Eqd2').textContent = "Invalid input";
        document.getElementById('dose2NewDose').textContent = "";
        return;
    }

    const eqd2 = dose2 * (((dose2 / fractions) + alphaBeta2) / (2 + alphaBeta2));
    const sqrtTargetFractions = Math.sqrt(targetFractions);
    const newDose = 0.5 * (
        sqrtTargetFractions * Math.sqrt((alphaBeta2 ** 2 * targetFractions) + (4 * alphaBeta2 * eqd2) + (8 * eqd2))
        - (targetFractions * alphaBeta2)
    );

    document.getElementById('dose2Eqd2').textContent = eqd2.toFixed(2);
    document.getElementById('dose2NewDose').textContent = newDose.toFixed(2);
}

function calculateDose3() {
    const fractions = parseFloat(document.getElementById('fractions').value);
    const targetFractions = parseFloat(document.getElementById('targetFractions').value);
    const alphaBeta3 = parseFloat(document.getElementById('alphaBeta3').value);
    const dose3 = parseFloat(document.getElementById('dose3').value);

    if (isNaN(fractions) || isNaN(alphaBeta3) || isNaN(dose3) || isNaN(targetFractions)) {
        document.getElementById('dose3Eqd2').textContent = "Invalid input";
        document.getElementById('dose3NewDose').textContent = "";
        return;
    }

    const eqd2 = dose3 * (((dose3 / fractions) + alphaBeta3) / (2 + alphaBeta3));
    const sqrtTargetFractions = Math.sqrt(targetFractions);
    const newDose = 0.5 * (
        sqrtTargetFractions * Math.sqrt((alphaBeta3 ** 2 * targetFractions) + (4 * alphaBeta3 * eqd2) + (8 * eqd2))
        - (targetFractions * alphaBeta3)
    );

    document.getElementById('dose3Eqd2').textContent = eqd2.toFixed(2);
    document.getElementById('dose3NewDose').textContent = newDose.toFixed(2);
}

function calculateAllResults() {
    calculateDose1();
    calculateDose2();
    calculateDose3();
}

// Initialize the calculation with the default values
window.onload = calculateAllResults;

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
}
