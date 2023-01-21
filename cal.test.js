

it('should calculate the monthly rate correctly', function() {
    // ...
    const values = {
      amount: 5000,
      years: 2,
      rate: 3.2
    };
    expect(calculateMonthlyPayment(values)).toEqual("215.35");
  });
  
  it("should return a result with 2 decimal places", function() {
    // ..
    const values = {
      amount: 500052,
      years: 6,
      rate: 4.8
    };
    expect(calculateMonthlyPayment(values)).toEqual("8007.00");
  });
  
  /// etc
  