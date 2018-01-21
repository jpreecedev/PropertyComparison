export const recalculateFigures = prospect => {
  const { monthlyRent, managementRate, repairsContingency, purchasePrice, mortgageRate, serviceCharge, insurance, refurbCosts } = prospect

  const annualIncome = (monthlyRent * 12)
  const annualManagement = annualIncome * (managementRate / 100)
  const annualRepairs = annualIncome * (repairsContingency / 100)
  const deposit = purchasePrice * 0.25
  const annualInterest = (purchasePrice - deposit) * (mortgageRate / 100)

  const annualProfit = annualIncome - ((annualInterest + annualManagement) + annualRepairs + serviceCharge + insurance)
  const netYield = (annualProfit / purchasePrice) * 100
  const returnOnInvestment = (annualProfit / (deposit + refurbCosts)) * 100

  return {
    ...prospect,
    deposit,
    annualProfit,
    netYield,
    returnOnInvestment
  }
}
