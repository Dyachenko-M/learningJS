"use strict"
// // Lesson 2 Task 1   
//     let x = 20
//     let y = 58
//     let z = 42
//     console.log(x+y+z)

// // Lesson 2 Task 2
//     let secInMin = 60
//     let minInHour = 60
//     let hourInDay = 24
//     let dayInYear = 365
//     let myAgeInSeconds = 21 * 365 * 24 * 60 * 60 + 255 * 24 * 60 * 60
//     console.log(myAgeInSeconds)

// // Lesson 2 Task 3
//     let count = 42
//     let userName = '42'
//     console.log(typeof(+userName))
//     console.log(typeof(String(count)))
//     console.log(typeof("" + count))
//     console.log(typeof(Number(userName)))

// // Lesson 2 Task 4
//     let a = 1
//     let b = 2
//     let c = "белых медведей"
//     console.log(String(a) + b + " " + c)

// // Lesson 2 Task 5
//     let bool = 'true'
//     let boole = false
//     let num = 17
//     let und = undefined
//     let n = null
//     console.log(typeof(bool))
//     console.log(typeof(boole))
//     console.log(typeof(num))
//     console.log(typeof(und))
//     console.log(typeof(n))

// // Lesson 2 Task 6
//     let ruy = 'lox'
//     let max = 'ferstapen'
//     let ice = 'baby'
//     console.log(`Variable: ruy have type: ${typeof(ruy)}`)
// // Lesson 2 Task 7
//     // let name = prompt("Ваше имя?")
//     // let age = prompt("Ваш возраст?")
//     // console.log(name, " ", age)

// // Lesson 2 Task 1a
//     let a = 4
//     let b = 3
//     b = a + b
//     a = b - a
//     b = b - a
//     console.log(a)
//     console.log(b)

// // Lesson 3 Task 1 
//     let aa = 'доступ'
//     let aaa = 'морпех'
//     let aaaa = 'наледь'
//     let aaaaa = 'попрек'
//     let aaaaaa = 'рубило'
//     let aSumLength = aa.length + aaa.length + aaaa.length + aaaaa.length +aaaaaa.length
//     console.log(aSumLength)
// // Lesson 3 Task 2


// // Lesson 3 Task 3
//     let height = 15
//     let width = 20
//     console.log( height > width ? height : width)

// // Lesson 3 Task 4
//     function multiple (){
//         for (let i = 0; i < 20; i++){
//             if(i % 3 == 0) {
//                 console.log(i)  
//             } 
//         }
//     }
//     console.log(multiple())

// // Lesson 3 Task 5
//     let key = true
//     let documents = true
//     let pen = true
//     let apple = false
//     let orange = true
//     let shouldGoToWork 

//     if((key && document && pen) && (apple ||orange) ){
//         shouldGoToWork = true
//         console.log(shouldGoToWork)
//     }
//     else{
//         shouldGoToWork = false
//         console.log(shouldGoToWork)
//     }


// // Lesson 3 Task 6
//     let num = prompt("enter number?")
//         if(num % 5 == 0 && num % 3 == 0){
//             console.log('FizBuz')
//         }
//         else if(num % 5 == 0){
//             console.log('Fiz')
//         }
//         else if(num % 3 == 0){
//             console.log('Buz')
//         }else {
//             console.log('lox')
//         }

// // Lesson 3 Task 7
//     let age = prompt("How old are you?")
//         if(age <= 18 && age >= 16){
//             console.log('smoke 1 sigarets')
//         }
//         else if(age < 18){
//             console.log('Drink coca cola')
//         }
//         else if(age > 18 ){
//             console.log('Drink beer')
//         }else {
//             console.log('puppy')
//         }

// // Lesson 3 Task 8
//     let side = prompt("write one side of the world?")
//     switch(side) {
//         case "юг": 
//             console.log('на юг пойдешь счастье найдешь')
//             break;

//         case "север": 
//             console.log('на север пойдешь много денег найдешь')
//             break;

//         case "запад": 
//             console.log('на запад пойдешь верного друга найдешь')
//             break;

//         case "восток": 
//             console.log('на восток пойдешь разработчиком станешь')
//             break;
//         default:
//             console.log('иди учи стороны')
//             break; 
//     }

// // Lesson 3 Task 1a
//     let codeWord1 = "обернись";
//     let codeWord2 = "неужели";
//     let codeWord3 = "огурцы";
//     let codeWord4 = "липкие";
//     let codeWord5 = "?!";
//     let cipher = codeWord1.slice(1,2) + codeWord2.slice(1,2) + codeWord3.slice(1,2) + codeWord4.slice(1,2) + codeWord5.slice(1,2)
//     console.log(cipher)

// // Lesson 3 Task 2a
//     let num = Number(prompt("Введите число"))
//     console.log(typeof(num))
//     let minus = prompt("отнять?")
//     let plus = prompt("прибавить")
//     let multi = prompt("умножить")
//     let devide = Number(prompt("разделить"))
//     let result = ((((num - minus) + Number(plus)) * Number(multi)) / Number(devide))
//     alert(`((((${num} - ${minus}) + ${plus}) * ${multi}) / ${devide}) = ${result}`)

// // Lesson 3 Task 3a
//     let side = prompt("Сколько ступенек?")
//     for(let i = 0; i <= side; i++){
//         let x = '#'
//         console.log(x.repeat(i))
//     }   


// // Lesson 4 Task 1 
//     let numb = prompt("how much?")
//     let sum = 0
//     function getSum(num) {
//         for(let i = 0; i <= num; i++){
//             sum+= i;

//         }
//         console.log(sum)
//     }
//     // console.log(typeof(+numb))
//     console.log(getSum(+numb))

// // Lesson 4 Task 2

//     function credit(count = 10000){
//         let sum = count * 5 * 0.17
//         return sum
//     }
//     console.log(credit())

// // Lesson 4 Task 3
//     let str = prompt("Введите string")
//     let from = prompt("ot?")
//     let to = prompt("do")
//     from = Number(from)
//     to = Number(to)
//     function trimString(str, from, to){
//         return str.slice(from,to)
//     }
//     console.log( trimString(str,from,to))

// // Lesson 4 Task 4
//     let n = prompt("Введите string")

//     function getSumNumbers(n){
//         let nArr = n.split('')
//         let sumNArr = 0
//         for(let i = 0; i < nArr.length; i++){
//             sumNArr+= +nArr[i]
//             console.log(sumNArr)
//         }
//         return sumNArr
//     }
//     getSumNumbers(n)


// // Lesson 4 Task 5
//     let a = prompt("Введите a")
//     let b = prompt("Введите b")
//     a = Number(a)
//     b = Number(b)
//     function getSum(a,b){
//         let sumAB = 0;
//         if (a < b){
//             for(let i = a; i <= b; i++){
//                 sumAB += i
//             }
//         }else if (a > b){
//             for(let i = b; i <= a; i++){
//                 sumAB += i
//             }
//         } else if (a == b) {
//             return a
//         }
//         console.log(sumAB)
//     }
//     getSum(a,b)

// // Lesson 4 Task 6
//     let bool = prompt("Введите")
//     let foo = () => console.log('foo') 
//     let boo = () => console.log('boo')
//     let fooboo = (x, foo, boo) => (x == true) ? foo() : boo()
//     fooboo(bool, foo, boo)
//     // console.log(foo)
//     // console.log(foo(bool))

// // Lesson 4 Task 1a
//     let a = Number(prompt("Введите a"))
//     let b = Number(prompt("Введите b"))
//     let c = Number(prompt("Введите c"))
//     let triangle = (a, b, c) => ((a + b) >= c) ? console.log('true') : console.log('false')
//     triangle(a,b,c)

// // Lesson 4 Task 2a
//     let barLength = Number(prompt("Введите a"))
//     let barWidth = Number(prompt("Введите b"))
//     let amountBreakBar = (a,b) => (a*b) - 1
//     console.log(amountBreakBar(barLength,barWidth))

// Lesson 4 Task 3a
// const tax = 0.11
// const telPrice = 823
// const telAccessoryPrice = 36
// const bankAccount = 10000

// let fullTelPriceWithoutTax = (a, b) => a + b
// let fullTelPriceWithTax = (a, fullTelPriceWithoutTax) => (a * fullTelPriceWithoutTax) + fullTelPriceWithoutTax
// console.log(fullTelPriceWithTax(tax, fullTelPriceWithoutTax(telAccessoryPrice, telPrice)))
// let fullCost = fullTelPriceWithTax(tax, fullTelPriceWithoutTax(telAccessoryPrice, telPrice))

// let getPhoneAmount = (bankAccount, fullCost) => {
//     let phoneAmount = 0;
//     while ((bankAccount - fullCost) > 0) { bankAccount-= fullCost; phoneAmount++ }
//     return phoneAmount;
// }
// console.log(`Вы можете купить ${getPhoneAmount(bankAccount, fullCost)} телефонов`)

// // Lesson 5 Task 1
// let obj = {
//     name: 'Max',
//     age: 21,
// }
// delete obj.age
// console.log(obj)

// // Lesson 5 Task 2
// let objT = {
//     name: 'Max',
//     age: 21,
// }

// console.log('agee' in objT)

// // Lesson 5 Task 3
// const colors = ['red', 'green', 'blue']
// console.log(colors.length)

// // Lesson 5 Task 4
// const animals = ['monkey', 'dog', 'cat']
// console.log(animals.at(-1))

// // Lesson 5 Task 5
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }

// for(let key in student){
//     console.log(key)
//     console.log(student[key])
// }

// // Lesson 5 Task 6
// const colorss = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// console.log(colorss['ru pum pu ru rum'].red)

// // Lesson 5 Task 7
// const numbers = [5, 43, 63, 23, 90]
// numbers.splice(0,numbers.length)
// // numbers.length = 0
// console.log(numbers)

// // Lesson 5 Task 8
// const students = ['Polina', 'Dasha', 'Masha']
// students.pop()
// students.push('Borya')
// students.shift()
// students.unshift('Andrey')
// console.log(students)

// // Lesson 5 Task 9
// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }

// let totalSalary = 0

// for(let key in salaries){
//     totalSalary += salaries[key]
// }

// let avgSalary = totalSalary / Object.keys(salaries).length
// console.log(avgSalary)

// // Lesson 5 Task 10
// let login = prompt('введите логин')
// let password = prompt('Введите пароль')

// let user = {
//     login,
//     password,
// }

// let isLoggedIn = prompt('подтвердите логин')
// let isPasswordIn =  prompt('подтвердите пароль')

// let userConfirm = {
//     isLoggedIn,
//     isPasswordIn,
// }

// if (user.login == userConfirm.isLoggedIn && user.password == userConfirm.isPasswordIn){console.log('true')}

// Lesson 5 Task 11
// const cats = ['Gachito', 'Tom', 'Batman']
// for(let i = 0; i < cats.length; i++){
//     console.log(cats[i])
// }

// for(let cat of cats){
//     console.log(cat)
// }

// // Lesson 5 Task 12
// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]

// let arr = evenNumbers.concat(oddNumbers)
// console.log(arr)
// console.log(arr.indexOf(8))

// // Lesson 5 Task 13
// const binary = [0, 0, 0, 0]
// binary.join(1)
// console.log(binary.join(1))

// // Lesson 5 Task 1a
// let score = prompt('Score')
// let home = score.charAt(0)
// let away = score.charAt(2)

// let dictionary = {
//     0:'ноль',
//     1:'один',
//     2:'два',
//     3:'три',
//     4:'четыре',
//     5:'пять',
//     6:'шесть',
//     7:'семь',
//     8:'восемь',
//     9:'девять',
// }

// let endScore = (home,away) => {
//     if(dictionary.hasOwnProperty(home)){
//         home = dictionary[home]
//     }
//     if(dictionary.hasOwnProperty(away)){
//         away = dictionary[away]
//     }
//     console.log(`${home}:${away}`)
//     return `${home}:${away}`
// }
// endScore(home,away)

// // Lesson 5 Task 2a
// let student1 = {
//     name: 'Polina',
//     age: 27,
// }

// let student2 = {
//     name: 'Polina',
//     age: 27,
// }

// console.log(Object.entries(student1).toString() === Object.entries(student2).toString())

// // Lesson 5 Task 3a
// const animals = {
//     cat: {
//        name: 'Енчик',
//        age: 3,
//     },
//     dog: {
//        name: 'Орео',
//        age: 2,
//     }
//  }
//  console.log(animals.bird?.name)

// Lesson 5 Task 4a
// let word = 'Довод'

// let checkWord = (word) => (word.toLowerCase() == word.toLowerCase().split("").reverse().join("")) ? console.log('yes') : console.log('no')
// checkWord(word)
// // Lesson 5 Task 5a
// let matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]



// let arrSumValue = (arr) => { 
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++){
//             sum += arr[i][j]
//         }
//     }
//     return sum
// }

// let arrSumLength = (arr) => {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i].length
//     }
//     return sum

// }

// let avgValue = (SumValue, SumLength) =>  SumValue/SumLength
// console.log(avgValue(arrSumValue(matrix), arrSumLength(matrix)))

// // Lesson 5 Task 6a
// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// let sort = (arr) => {
//     let arrPlusNum = []
//     let arrMinusNum = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             arrMinusNum.push(arr[i])
//         }
//         else{
//             arrPlusNum.push(arr[i])
//         }
//     }
//     console.log(arrMinusNum)
//     console.log(arrPlusNum)
// }
// sort(mixedNumbers)

// // Lesson 5 Task 7a
// let arr = Array.from({length: 7}, () => Math.floor(Math.random() * 7))
// console.log(arr)

// let pow = (arr) => {
//     let arrPow = []
//     for(let i = 0; i < arr.length; i++){
//         arrPow.push(Math.pow(arr[i], 3))
//     }
//     console.log(arrPow)
// }

// pow(arr)

// // Lesson 6 Task 1
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// // fibonacci.forEach((arrEl) => console.log(arrEl))

// function consolArr(arrEl) {
//     console.log(arrEl)
// }
// fibonacci.forEach(consolArr)

// // Lesson 6 Task 2
// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// const newUsers = users.map((name) => {
//     return `member ${users.indexOf(name) + 1}: ${name}`
// })
// console.log(newUsers)

// // Lesson 6 Task 3
// const numbers = [7, -4, 32, -90, 54, 32, -21]
// const positiveNum = numbers.filter((num) => num > 0)

// console.log(positiveNum)

// Lesson 6 Task 4
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// const sumFibonachi = fibonacci.reduce((a,b) => {
//     return a + b
// })

// console.log(sumFibonachi)

// // Lesson 6 Task 5
// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// const posNum = numbers.find((num) => num % 2 == 0)
// console.log(posNum)

// // Lesson 6 Task 1a
// function Student(salary, rate, name) {
//     this.salary = salary
//     this.rate = rate 
//     this.name = name

//     this.sumOfCredit = () => {
//         if(this.rate == 'A'){
//             return this.salary * 12
//         }
//         if(this.rate == 'B'){
//             return this.salary * 9
//         }
//         if(this.rate == 'C'){
//             return this.salary * 6
//         }
//         if(this.rate == 'D'){
//             return 0
//         }
//     }
// }

// let student1 = new Student(1000,'A','max')
// let student2 = new Student(2000,'B','dax')
// let student3 = new Student(3000,'C','shax')
// let student4 = new Student(4000,'D','fax')
// let student5 = new Student(5000,'B','sax')

// let allStudent = [student1,student2,student3,student4,student5]


// let sumOfAllStudentCredit = (allStudent) => {
//     let pidori = allStudent.reduce((acc, value) => {
//         return acc + value.sumOfCredit()
//     }, 0)
//     return pidori
// }

// console.log(sumOfAllStudentCredit(allStudent))

// console.log(student1.sumOfCredit())
// console.log(student1)

// Lesson 6 Task 2a
// let vowelLetter = ['a', 'e', 'i', 'o', 'u']
// let str = 'This website is for losers LOL!'

// let vowelLetterDelete = (str, arr) => {
//     arr.forEach(el => {
//         str = str.replaceAll(el, '')
//         str = str.replaceAll(el.toUpperCase(), '')
//     });
//     return str
// }

// console.log(vowelLetterDelete(str, vowelLetter))

// // Lesson 6 Task 3a

// let accum = (str) => {
//     let newStr = ''
//     let letter
//     for (let i = 0; i < str.length; i++) {
//         letter = str.charAt(i)
//         newStr += letter.toUpperCase() + letter.repeat(i) + '-'
//     }

//     return newStr.slice(0, newStr.length - 1)
// }

// let strs = 'abcd'
// console.log(accum(strs))

// // Lesson 6 Task 4a
// let highAndLow = (str) => {
//     let arrNum = str.split(' ')
//     return `${Math.max(...arrNum)} ${Math.min(...arrNum)}`
// }
// console.log(highAndLow("1 9 3 4 -5"))

// Lesson 6 Task 5a
// let obj = {}

// let isIsogram = (str) => {
//     str = str.toLowerCase()
//     let arrStr = str.split('')
//     arrStr.forEach(el => {
//         if(obj.hasOwnProperty(el)){
//             return false
//         }else{
//             obj[el] = el
//             console.log(obj)
//         } 
//     })
//     return true
// }

// console.log(isIsogram("aba"))
// // Lesson 6 Task 6a

// let strToAscii = (str) => {
//     let AsciiStr = ''
//     for(let i = 0; i < str.length; i++){
//         AsciiStr += str.charCodeAt(i)
//     }
//     return AsciiStr.replaceAll('7','1')
// }
// console.log(strToAscii('ABC'))

// // Lesson 6 Task 7a
// let obj = {}

// let codeStr = (str) => {
//     let arrStr = str.split('')
//     arrStr.forEach((el, index, arr) => {
//         if(arr.indexOf(el) == arr.lastIndexOf(el)){
//             str = str.replaceAll(el,'(')
//         }else{
//             str = str.replaceAll(el,')')
//         }
//     });
//     return str
// }

// console.log(codeStr('recede'))


const sum = eval("10*10+5-sad");
console.log(sum)