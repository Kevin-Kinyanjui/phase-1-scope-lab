
var customerName = 'bob';
const leastFavoriteCustomer = 'not bob';

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
   return customerName
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer
}
bestCustomer

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
    return leastFavoriteCustomer
}