import Decimal from 'decimal.js'

const CashStackModel = () => {

    // empty stack
    const stack = [
        { name: 'PENNY', label: 'Pennies', value: new Decimal(.01), count: 0, func: penny },
        { name: 'NICKEL', label: 'Nickels', value: new Decimal(.05), count: 0, func: nickel },
        { name: 'DIME', label: 'Dimes', value: new Decimal(.1), count: 0, func: dime },
        { name: 'QUARTER', label: 'Quarters', value: new Decimal(.25), count: 0, func: quarter },
        { name: 'ONE', label: 'Ones', value: new Decimal(1), count: 0, func: one },
        { name: 'FIVE', label: 'Fives', value: new Decimal(5), count: 0, func: five },
        { name: 'TEN', label: 'Tens', value: new Decimal(10), count: 0, func: ten },
        { name: 'TWENTY', label: 'Twenties', value: new Decimal(20), count: 0, func: twenty },
        { name: 'ONE HUNDRED', label: 'One hundreds', value: new Decimal(100), count: 0, func: hundred }
    ]

    // change
    const getChange = (price, paymentStack) => {

        let due = paymentStack.getSum().minus(price)

        // get change
        const newStack = new CashStackModel().addStack(self).addStack(paymentStack)
        const changeStack = new CashStackModel()
        const counts = stack.slice().reverse()
        for (let item of counts) {
            while (due.greaterThan(0) && due.greaterThanOrEqualTo(item.value) && item.count > 0) {
                changeStack.addKind(item.name, 1)
                newStack.addKind(item.name, -1)
                due = due.minus(item.value)
            }
        }
        return {
            success: due.isZero(),
            newStack,
            changeStack
        }
    }

    // utils
    const getItemsStack = () => stack.slice()
    const getSum = () => {
        return stack.reduce((sum, item) => {
            sum = sum.plus(item.value.times(item.count))
            return sum
        }, new Decimal(0))
    }
    const addStack = _stack => {
        stack.map(item => {
            const sitem = _stack.findKind(item.name)
            item.count += sitem.count
            return item
        })
        return self
    }
    const addKind = (name, n) => {
        const item = stack.find(item => item.name === name)
        if (item) {
            item.count += parseInt(n)
        }
        return self
    }
    const updateKind = (name, n) => {
        const item = stack.find(item => item.name === name)
        if (item) {
            item.count = parseInt(n);
        }
        return self
    }
    const findKind = (name) => stack.find(_item => name === _item.name)

    // shortcut to add coins/bills to stack
    const penny = (n) => addKind('PENNY', n)
    const nickel = (n) => addKind('NICKEL', n)
    const dime = (n) => addKind('DIME', n)
    const quarter = (n) => addKind('QUARTER', n)
    const one = (n) => addKind('ONE', n)
    const five = (n) => addKind('FIVE', n)
    const ten = (n) => addKind('TEN', n)
    const twenty = (n) => addKind('TWENTY', n)
    const hundred = (n) => addKind('ONE HUNDRED', n)

    // returns self
    const self = {
        penny,
        nickel,
        dime,
        quarter,
        one,
        five,
        ten,
        twenty,
        hundred,

        addKind,
        updateKind,
        findKind,

        getItemsStack,

        addStack,
        getSum,
        getChange,

        output: () => stack.map(item => [item.name, item.value.times(item.count).toString()])
    }
    return self
};

export default CashStackModel