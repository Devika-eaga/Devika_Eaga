import Tax from "./Tax.js";
//Unit test test cases for Ontaria tax calculations
QUnit.test("For incomes under $40,922 in Ontario, calculate the tax", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calc(15000, 150);
    assert.equal(taxes[0], "757.50", "Expected valid value in Ontario Tax");
});

QUnit.test("For incomes between $40922 and $81847 in Ontario, calculate the tax", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calc(60000, 4000);
    assert.equal(taxes[0], "3812.64", "Expected valid value in Ontario Tax");
});

QUnit.test("For incomes between $81847 and $150000in Ontario, calculate the tax", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calc(100000, 6500);
    assert.equal(taxes[0], "7836.87", "Expected valid value in Ontario Tax");
});

QUnit.test("For incomes between $150000 and $220000 in Ontario, calculate the tax", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calc(185000, 15000);
    assert.equal(taxes[0], "17673.00", "Expected valid value in Ontario Tax");
});

QUnit.test("For incomes greater than $220000 in Ontario, calculate the tax", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calc(240000, 60000);
    assert.equal(taxes[0], "24561.00", "Expected valid value in Ontario Tax");
});

//Unit test test cases for Federal tax calculations
QUnit.test("For incomes under $40922 in Federal, calculate the tax", function (assert) {
    const fTax = new Tax();
    var taxes = fTax.calc(25000, 150);
    assert.equal(taxes[1], "3750.00", "Expected valid value in Federal Tax");
});

QUnit.test("For incomes between $40922 and $81847 in Federal, calculate the tax", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calc(60000, 6000);
    assert.equal(taxes[1], "9809.19", "Expected valid value in Federal Tax");
});

QUnit.test("For incomes between  $81847 and $150000 in Federal, calculate the tax", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calc(95000, 6500);
    assert.equal(taxes[1], "17228.62", "Expected valid value in Federal Tax");
});

QUnit.test("For incomes between $150000 and $220000 in Federal, calculate the tax", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calc(180000, 11000);
    assert.equal(taxes[1], "40516.48", "Expected valid value in Federal Tax");
});

QUnit.test("For incomes greater $220000 than in Federal, calculate the tax", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calc(250000, 55000);
    assert.equal(taxes[1], "62817.00", "Expected valid value in Federal Tax");
});
