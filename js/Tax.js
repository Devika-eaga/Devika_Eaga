export default class Tax {
    calc(amount, paidTax) {
        const ONtax = calcOntarioTax(amount);
        const FEDtax = calcFederalTax(amount);
        const tax = ONtax + FEDtax;
        const owingTax = tax - paidTax;

        return [formatCur(ONtax), formatCur(FEDtax), formatCur(tax), formatCur(owingTax)];
    }
}

function calcOntarioTax(amount) {
    if (amount <= 40922) {
        return 0.0505 * amount;
    } else if (amount <= 81847) {
        return 0.0915 * (amount - 40922) + 2067;
    } else if (amount <= 150000) {
        return 0.1116 * (amount - 81847) + 5811;
    } else if (amount <= 220000) {
        return 0.1216 * (amount - 150000) + 13417;
    } else if (amount > 220000) {
        return 0.1316 * (amount - 220000) + 21929;
    }
}

function calcFederalTax(amount) {
    if (amount <= 45282) {
        return 0.15 * amount;
    } else if (amount <= 90563) {
        return 0.205 * (amount - 45282) + 6792;
    } else if (amount <= 140388) {
        return 0.26 * (amount - 90563) + 16075;
    } else if (amount <= 200000) {
        return 0.29 * (amount - 140388) + 29029;
    } else if (amount > 200000) {
        return 0.33 * (amount - 200000) + 46317;
    } 
}

function formatCur(value) {
    return value.toFixed(2);
}