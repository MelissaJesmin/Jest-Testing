let func = require('./functions')

test('Return two',() => {
    expect(func.returnTwo()).toBe(2)
})

test('Return greeting with name',()=> {
    expect(func.greeting('James')).toBe('Hello, James.')
    expect(func.greeting('Jill')).toBe('Hello, Jill.')
})


describe('Math functions', () => {
    test('Return sum of two numbers',() => {
        expect(func.add(1,2)).toBe(3)
        expect(func.add(5,9)).toBe(14)
    })
    
    test('Return multiplication of two numbers',() => {
        expect(func.multiply(1,2)).toBe(2)
        expect(func.multiply(5,9)).toBe(45)
    })
    
    test('Return divition of two numbers',() => {
        expect(func.divide(10,2)).toBe(5)
        expect(func.divide(27,9)).toBe(3)
    })
    
    test('Return subtraction of two numbers',() => {
        expect(func.subtract(3,2)).toBe(1)
        expect(func.subtract(9,5)).toBe(4)
    })
})
