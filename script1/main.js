var email = 'test@gmail.com'
console.log(email)
email = 'test2@gmail.com'
console.log(email)
let number = 10
const pi = 3.14
console.log(pi + number)
console.log('number', number)

// тип даних  number
const age = 20
console.log('Age =', age)
console.log('Age =', typeof (age))

// тип даних  string
const name1 = 'Bill'
console.log('Name =', name1)
console.log('Name =', typeof name1)

let email1 = "test3@gmail.com"
console.log('email =',email1 )
console.log(' email =', typeof email1)

// тип даних  boolean

let isActivate = true
console.log('isActivate =',isActivate )
console.log(' isActivate =', typeof isActivate)

// тип даних undefined

let any
console.log('Any =>', any );
console.log('Any =>', typeof any);

any = 'test'
console.log('Any =>', any );
console.log('Any =>', typeof any);

// тип даних null

let port=null
console.log('port =>', port );
console.log('port =>', typeof port);
port = 5500
console.log('port =>', port );
console.log('port =>', typeof port);

// операціі

const a = 5.2, b = 10, c = 3
let result = 0
result = a + b
console.log(result)
result = b%c
console.log(result)

const hello = 'hello is my first app'
//alert(hello)
const num1 = +prompt('Enter number 1')
const num2 = +prompt('Enter number 2')
alert(num1 + num2)

const day = prompt('Enter day!')
document.write(day)

console.log(Math.floor(Math.random()*100))