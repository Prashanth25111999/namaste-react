// Testing File Inside The __test__ Folder 

import Sum from "../Sum"

test('Testing The Sum Function With Two Values', () => {

    const result = Sum(4, 6)
    // Assertion [An assertion confirms that the code behaves as expected.]
    expect(result).toBe(10)
})