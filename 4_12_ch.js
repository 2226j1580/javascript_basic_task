var sale1;
var sale2;
var sale3;
var sale4; 
var sale;
var calculateTax;
var displaySale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 200, taxRate: 8 }; 

calculateTax = function (sale) {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
};

displaySale = function (sale) {
    console.log("Price = $" + sale.price);
    console.log("Tax @ " + sale.taxRate + "% = $" + sale.tax.toFixed(2));
    console.log("Total cost = $" + sale.total.toFixed(2));
    console.log("--------------------------------");
};

sale = sale1;
calculateTax(sale);
displaySale(sale);

sale = sale2;
calculateTax(sale);
displaySale(sale);

sale = sale3;
calculateTax(sale);
displaySale(sale);

sale = sale4;
calculateTax(sale);
displaySale(sale);
