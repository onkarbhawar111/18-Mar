// console.log("hello from script.js file")
// console.log(5 + 5)


// alert('Welcome to my website...')

// prompt('Welcome')


// let x = 101
// var y = 100
// const z = 1000
// console.log("Value of x: ", x)

// let x = prompt('Enter value of x')
// console.log(x)


// var x = 100         // declaration  assignment
// console.log(x)
// var x = 101         // re-declaration
// console.log(x)

// let x = 100    //declaration
// let x = 101    //redeclaration not allowed

// const x = 100
// const x = 101   //not allowed



// var x = 100      //declaration , assignment
// console.log(x)
// x = 101          //re-assignment

// console.log(x)

// let x = 100
// x = 101
// console.log(x)

// const x = 100
// x = 101
// console.log(x)


// let x = 100
// x = 'Onkar'



// int x = 10;
// int y = 100;


// let x = 10
// let y = 11

// let name = "Onkar"
// console.log(name)

// let employee = {
//     fname: 'Onkar',
//     lname: "Bhawar",
//     profile: "MERN Stack Dev"
// }

// console.log("Fname: ", employee.fname)

// let Cars = ['Audi', 'Mercedez Benz', 'BMW', 'Hyundai', 111] 
// console.log(Cars[0])
// console.log(Cars[1])
// console.log(Cars[5])



// function greet(){
//     console.log('fn called....')

//     let x = 100
//     // console.log(x+4)




//     return x;
// }

// console.log(greet())




// let x= [11, 22, 33, 44, 55];

// let x = {
//     0:11,
//     1:22,
//     2:33,
//     3:44,
//     4:55
// }


// console.log(typeof(x))


// let x = 3
// console.log(x**3)       //3*3*3

// let x = 20;
// console.log(x/5)    //quotient
// console.log(x%2)       //remainder  

// console.log(++x)   //pre increment
// console.log(x++)      //post increment
// console.log(x) 


// console.log(x--)
// console.log(x)


// x += y           //x = x + y
// console.log(x)


// let x = 100
// let y = 101

// console.log(x === y)      //== and ===

// console.log(x != y)


//TERNARY OPR (CONDITIONAL OPR)
// part1       ?   part2   :   part3 
// condition       code        code

// x == y ? console.log('equal') : console.log('not equal')







//LOGICAL OPR
// LOGICAL AND      &&


//  x == y && a == b


// let x = 10
// let y = 20


// console.log( x != y && x < 60 )
// console.log( x != y && x > 60 )
// console.log( x == y && x < 60 )
// console.log( x == y && x > 60 )


//LOGICAL OR 

// console.log( x != y || x<60 )
// console.log( x != y || x>60 )
// console.log( x == y || x<60 )
// console.log( x == y || x>60 )


//LOGICAL NOT
//      !
// let x = 100      // nonzero true
// let y = 0        //zero     false

// console.log(!y)   






// let fname = ' Onkar      '
// let lname = "Bhawar"
// let fullName = `My name is ${fname} ${lname}. I am . MERN . Stack Dev`


// console.log(fname.length)
// console.log(fname.toUpperCase())
// console.log(lname.toLowerCase())
// console.log(fname.charAt(2))
// console.log(fname.indexOf(' '))
// console.log(fname.slice(0, 2))
// console.log(fname.replace('O', 'BHAWAR'))
// const arr = fullName.split('-')
// console.log(arr)
// console.log(fname.trim())

// console.log(fullName.includes('Onkar999'))



// let arr = [11, 22, 33, 44, 55, 'Onkar']

// let arr = [
//     {
//         name: "Onkar",
//         age: 25,
//         stack: 'MERN',
//         isAuthenticated: true
//     },
//     {
//         name:'Bhawar',
//         age: 60,
//         stack: 'JAVA',
//         isAuthenticated: false
//     }
// ] 

// console.log(arr[1].name)

// let str = 'Onkar'


// let arr2 = new Array(111, 222, 333, 444)

// console.log(arr2)


// let arr = [11, 22, 33, 44]
// let arr2 = ["Onkar", 'Bhawar']

// console.log(arr.push(999))
// console.log(arr.pop())
// console.log(arr.shift())
// console.log(arr.unshift(999, 888, 777))
// console.log(arr)

// let arr3 = arr.concat(arr2)
// let arr3 = arr.slice(0, 3)
// console.log(arr3)

// let arr3 = arr.splice(0, 2, 999, 888, 777)
// console.log(arr)



// function add(){
//     console.log('add fn called...')
// }

// add()

//arrow fn
// const add = () => {
//     console.log('add fn called')

//     return 1
// }

// const result = add()
// console.log("Result: ", result)


// let arr = [11, 22, 33, 44, 55, 66, 77, 88]
// const arr3 = arr.forEach((key) => {
//     return key * 10
// })

// const arr3 = arr.map((key) => {
//     return key * 10
// })
// let newArr = arr.filter((key) => {
//     return key%2 == 0
// })
// console.log(newArr)


// let fruits = ["Mango", "Banana", "Apple"]

// let newFruits = fruits.filter((key) => {
//     return key.length > 5
// })

// console.log(newFruits)


// let ans = fruits.find((itr) => {
//     return itr.startsWith('Z')
// } )
// console.log(ans)


// let fruits = ["Mango", "Banana", "Apple"]

// let result = fruits.reduce((acc, key)=> {
//     return acc + key.length
// }, 0)

// first iteration (first round)
// acc=0, key="Mango" ----- 0 + 5    acc = 5

//second iteration
// acc= 5   key= "Banana" ---  5+6    acc= 11

//third iteration
// acc=11, key="Apple" ---  11 + 5    acc = 16


// console.log(result)

// let fruits = ["Mango", "Banana", "Apple"]
// console.log(fruits.includes('Pineapple'))



// let arr = [5, 1, 3, 4, 2, 1, 1, 1]
// let newArr = arr.sort()
// console.log((newArr))


// let arr = [1, 3, 2, 4, 5]
// arr.reverse()
// console.log(arr)


//for loop

// for(step1 ; step2 ; step4){
//     step3
// }

// for(initialization ; condition ; increment/decrement){
//      logic
// }

// console.log('Start')
// for(let i = 0 ; i<5 ; i++){
//         console.log(i)
// }
// console.log('End')

//first iteration
//i=0   






// console.log('Start')
// for(let i = 0 ; i<5 ; i++){
//         console.log('inside for loop')
// }
// console.log('End')



//WHILE LOOP

// step1


// while(step2){
//     step3;
//     step4;
// }

// initialization
// while(condition){
//     logic




//     i++;
// }

// let i=5
// console.log('start')
// while(i<5){
//     console.log(i)




//     i++
// }

// console.log('end')


//DO ... WHILE LOOP
// do{

// }while()

// console.log('start')

// let i = 5

// do {
//     console.log(i)



//     i++;
// } while (i < 5)
// console.log('end')



//FOR ... IN LOOP

// let employee = {
//     fname: "Onkar",
//     lname: "Bhawar",
//     empId: 101
// }

// for( let key in employee){
//     console.log(key + ": " + employee[key])
// }


//FOR ... OF LOOP

// let arr = [11, "Mango" , 22, 33, 44, 55, 66, 77]

// for(let key of arr){
//     console.log(key + 1)
// }


//CONDITIONALS

// let i = 0

// if(i<5){
//     console.log('if statement called...')

// }

// let i = 0

// if(i>5){
//     console.log('if executed...')


// } else{
//     console.log('else executed...')
// }


// let i = 2

// console.log('start')

// if(i == 1){
//     console.log('i is 1')
// } else if(i == 2){
//     console.log('i == 2 first....')
// } else if(i == 2){
//     console.log('i == 2 .....second')
// } else if(i == 4){
//     console.log('i is 4')
// } else{
//     console.log('no value between [1, 2, 3] matched')
// }
// console.log('end')

//TERNARY OPR

// let age =10

// age >= 18 ? console.log('You are an adult') : console.log("Minor")


// console.log('Start')

// for(let i=0 ; i<5 ; i++){     //4

//     if(i == 3){
//         continue
//     }
//     console.log(i)
// }

// console.log('End')

// console.log("START")
// let day = 'Saturday'

// switch (day) {
//     case 'Sunday':
//         console.log('Funday')
//         break;
//     case 'Monday':
//         console.log('Start of the week..')
//         break;
//     case 'Tuesday':
//         console.log('It is Tuesday')
//         break;
//     case 'Saturday':
//         console.log('Weekend is here...')
//         break;
//     default:
//         console.log('No Day Matched....')
//         break;
// }

// console.log("END")




// console.log('HEllo')

// alert('Hello Welcome to my website')

// prompt("Welcome to My Website...")


// let x = prompt('Enter value of x: ')
// console.log(x)





//CALCULATOR USING SWITCH CASE

// let x = parseInt(prompt("Enter value of x: "))    // parseInt:"10" --> 10
// let y = parseInt(prompt("Enter value of y: "))
// let operator = prompt("Enter value of operator: ")


// console.log("x: ", x)

// console.log("y: ", y)
// console.log("Operator: ", operator)

// switch (operator) {
//     case '+':
//         console.log("Result of x+y: ", x + y)
//         break;
//     case '-':
//         console.log('Result of x-y: ', x - y)
//         break;
//     case '*':
//         console.log('Result of x*y: ', x * y)
//         break;
//     case '/':
//         console.log('result of x/y: ', x / y)
//         break;
//     default:
//         console.log('Invalid operator... Please try again')    
// }




//ERROR  HANDLING
// console.log("Start")     //Start

// try {
//     let x = 100
//     console.log(x / y)    

//     console.log('last line of try block executed.....')
// } catch (err) {
//     console.log('The error is: ', err)

// } finally{
//     console.log('finally.......')
// }

// console.log("End")         //End





//FUNCTION

// function greet(firstName){             //firstName - parameter,  firstName = 'Onkar'
//     console.log('Good Morning, ', firstName)
// }

// // greet('Onkar')      // 'Onkar' - arguement
// greet('Siddhesh')
// greet('Kulbhushan')

// function add(x, y){     //x = 2, y = 3
//     console.log("x: ", x)
//     console.log("y: ", y)
//     console.log("Addition: ", x+y)
// }

// add(2, 3)      //  2, 3 - arguements



// const x = function(){
//     console.log('inside fn .......')
// }

// x()


// const greet = function(a){
//     console.log('Hello, ', a)
// }

// greet('Bhawar')

// var add = function(a, b){
// console.log('Addition: ', a+b )
// }

// add(5, 10)

//arrow function

// const x = () => {
//     console.log('inside fn x')
// }

// x()

// const greet = z =>{    //z = "Onkar"
//     console.log('Good Evening', z)
// }

// greet('Bhawar')

// const add = (i, j) => i + j;

// console.log(add(3, 70))



// try{
//     let x = 10
//     console.log(x/y)

//     console.log('after error line')
// } catch(error){
//     console.log('Some Error occured....')
// } finally{
//     console.log('finally block......')
// }


//THROW - to explicitly throw an error

// function getRectArea(width, height) {  //width=3, height='five'
//     if (isNaN(width) || isNaN(height)) {
//         throw new Error('Parameter is not a number!!!!');
//     }
//     return console.log("Area: ", height * width)
// }
// try {
//     getRectArea(3, 'five');
// } catch (e) {
//     console.error(e);
// }




// let person = {
//     fname: "Onkar11111",
//     lname: "Bhawar",
//     age: 25,
//     fullName: function(){
//         return `My name is ${this.fname} ${this.lname}.  I am ${this.age} years old.`
//     }
// }

// console.log(person.fullName())


// console.log('Hello  ')
// window.console.log("Hello")

// let x = document.getElementById('z111')
// console.log(x.textContent)



// let y = document.getElementById('q987')
// console.log(y.textContent)

// let x = document.getElementsByClassName('cls1')
// console.log(x[0].textContent)

// let element = document.getElementsByTagName('h2');

// console.log(element[0].textContent)

// let x = document.querySelector('h2')
// console.log(x.textContent)

// let x = document.querySelector('.cls1')
// console.log(x.textContent)

// let y = document.querySelector('#z111')
// console.log(y.textContent)

// let x = document.querySelectorAll('.cls1')
// console.log(x[2].textContent)

// let x = document.querySelectorAll('.cls1')
// console.log(x[2].textContent)

// let x = document.querySelectorAll('h2')
// console.log(x[2].textContent)

// let x = document.getElementById('z111')
// console.log(x.tagName)

// let x = document.getElementById('myDiv')
// // console.log(x.textContent)


// x.textContent = 'Good Evening'

// let x = document.querySelector('img')

// // x.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg')

// // x.setAttribute('alt', 'New Image description')

// const y = x.getAttribute('alt')
// console.log(y)


// let x = document.querySelector('h1')
// x.style.color = 'red'
// x.style.border = '12px solid blue'



// console.log(x.style.border)


// let x = document.getElementById('id9')
// let y = document.createElement('span')
// y.textContent = ' span text '

// x.append(y)
// x.prepend(y)
// x.after(y)
// x.before(y)

// x.remove()

let x = document.querySelectorAll('button')

x[0].onclick = () => {
    console.log('Button 1 clicked....')
}

x[1].ondblclick = () => {
    console.log('Button 2 clicked.....')
}

let y = document.querySelector('div')
y.onmouseover = () => {
    console.log('inside div')
}