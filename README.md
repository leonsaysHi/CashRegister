## CashRegister

* ReactJs test app

## State

* Design a CashRegister that allows you to make payment by passing “price”, “cash” and then calculates if the change due is available, if the amount is available then return “Change Due:
$1.01” if it does not have sufficient cash then return “Insufficient Funds” and after paid is trigger then it returns “Closed”. Also you should be able to call square at the end of day, initial cash + sold amount it should equal totalAmount available.
Note remember the cash register should know how many of each amount it contains, and it could use combinations of each to give you the change.

Example:
[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] It always has all 9 denominations, even when they are 0.


## Pre-requisites 

* Install node on your machine
* Install yarn


# Installation

## yarn

```shell
$ yarn install
```

## dev

```shell
yarn run start
```
