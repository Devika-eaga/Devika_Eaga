import Tax from "./Tax.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";

$(document).ready(() => {
    // Inserting Event listeners
    const incomeInput = $("#price");
    const taxInput = $("#taxPaid");

    incomeInput.on("keypress", function (evt) {
        if (evt.key === "Enter") {
            evt.preventDefault();
            taxInput.focus();
        }
    });

    taxInput.on("keypress", function (evt) {
        if (evt.key === "Enter") {
            evt.preventDefault();
            $("#calc").click();
        }
    });

    $("#calc").click(() => {
        // Input values
        const amount = parseInt(incomeInput.val());
        const paidTax = parseInt(taxInput.val());

        // Calculation for taxes
        const hstCalc = new Tax();
        const taxValues = hstCalc.calc(amount, paidTax);

        // Updating the UI
        $("#amount").html(amount);
        $("#OnTax").html(taxValues[0]);
        $("#FedTax").html(taxValues[1]);
        $("#TotTax").html(taxValues[2]);
        $("#OwingTax").html(taxValues[3]);
    });
});