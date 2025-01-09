"use strict";

/* 
    Напишите функцию, которая принимает 3 параметра:
    -Сумма
    -Валюта исходная
    -Валюта для конвертации
    И возврщает строку уже сконвертированной суммы с постфиксом валюты.
    Если не смог, то null
*/

function convert(sum, initialCurrency, convertCurrency) {
  const allCurrencies = [
    { name: "USD", multiplication: 1 },
    { name: "RUB", multiplication: 0.001 },
    { name: "EUR", multiplication: 1.03 },
  ];
  const initial = allCurrencies.find(
    (currency) => currency.name === initialCurrency
  );
  const convert = allCurrencies.find(
    (currency) => currency.name === convertCurrency
  );
  if (!initial || !convert) {
    return null;
  }
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: convertCurrency,
  }).format((sum * initial.multiplication) / convert.multiplication);
}

console.log(convert(10, "USD", "RUB"));
