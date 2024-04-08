function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  //   const budget = {};
  //   budget[`income-${getCurrentYear()}`] = income;
  //   budget[`gdp-${getCurrentYear()}`] = gdp;
  //   budget[`capita-${getCurrentYear()}`] = capita;
  //   return budget;

  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
  return budget;
}
