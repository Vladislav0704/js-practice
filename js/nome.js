let balance = 10000;
const payment = 2000;

console.log(`Общая стоимость тоавара ${payment} кредитов. Проверяем доступное количество доступных кредитовна счету. `);

if (payment <= balance) {
    console.log(`oK`);

    balance -= payment;

    console.log(`На счету осталось ${balance} кредитов`)
};