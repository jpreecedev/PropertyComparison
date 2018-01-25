import { defaultState } from '../store/state'
import { recalculateFigures } from './finances'

test('that the correct figures are produced using the default prospect', () => {
  const result = recalculateFigures(defaultState.prospects.nextProspect)
  expect(result.deposit).toEqual(30000)
  expect(result.annualProfit).toEqual(660)
  expect(Number(result.netYield.toFixed(2))).toEqual(0.55)
  expect(Number(result.returnOnInvestment.toFixed(2))).toEqual(2.1)
})

test('that the correct figures are produced using another prospect', () => {
  const data = {
    address: '123 Bob Street',
    purchasePrice: 250000,
    refurbCosts: 1500,
    monthlyRent: 550,
    mortgageRate: 5,
    managementRate: 10,
    repairsContingency: 5,
    serviceCharge: 150,
    insurance: 300
  }

  const result = recalculateFigures(data)

  expect(result.deposit).toEqual(62500)
  expect(result.annualProfit).toEqual(-4215)
  expect(Number(result.netYield.toFixed(2))).toEqual(-1.69)
  expect(Number(result.returnOnInvestment.toFixed(2))).toEqual(-6.59)
})
