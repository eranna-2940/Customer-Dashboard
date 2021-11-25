export const totalAmount = function (customersDashboardData) {

    let sum = 0;

    for (const cus of customersDashboardData) {
        // reassigned
        sum = sum + cus.Amount;
    }
    return sum;
};