const MonthCalculator = require('../../src/components/months')

describe('Month Calculator',()=>{
  it('Should return current month',()=>{
    const monthCalculator = new MonthCalculator()
    const date = new Date("June 17, 1995 03:24:00")

    monthCalculator.api.currentDate=date
    const spy = spyOn(monthCalculator.api, 'currentDate').and.resolveTo(date)

    console.log('monthCalculator.getCurrentMonth()',monthCalculator.getCurrentMonth())
    // expect(spy).toHaveBeenCalled();

    const y = monthCalculator.getCurrentMonth();
    expect(y).toBe('June')


    // console.log()
    // expect(x)toBe(y)
  })
})