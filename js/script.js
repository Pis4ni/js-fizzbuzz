const display = document.getElementById("display")
console.log(display)
//* creo una variabile con il valore "FizzBuzz" 
let fizzBuzz = "FizzBuzz"
//* creo una variabile con il valore "Fizz" 
let fizz = "Fizz"
//* creo una variabile con il valore "Buzz" 
let buzz = "Buzz"
//* creo un ciclo che vada da 1 a 100 
for (let i = 1; i < 100 ; i++) {
const myDiv = document.createElement('div')
myDiv.classList.add('box')
if (i % 3 !== 0 && i % 5 !== 0) {
    console.log(i)  //* mostro in console il risultato del ciclo
    
    myDiv.innerHTML=i
    
    //* SE un numero è divisibile per 3 - mostro al posto del nuemro "Fizz"
} else if (i % 3 == 0 && i % 5 !== 0){
    console.log(fizz)   //* mostro in console il risultato del ciclo
        myDiv.classList.add('color1')
        myDiv.innerHTML=fizz
        
        //* SE un numero è divisibile per 5 - mostro al posto del nuemro "Buzz"
    } else if (i % 5 == 0 && i % 3 !== 0){
        console.log(buzz)   //* mostro in console il risultato del ciclo
        myDiv.classList.add('color2')
        myDiv.innerHTML=buzz
        //* SE un numero è divisibile per 3 E per 5 - mostro al posto del numero "FizzBuzz" 
    } else{
        console.log(fizzBuzz)   //* mostro in console il risultato del ciclo
        myDiv.classList.add('color3')
        myDiv.innerHTML=fizzBuzz
    }
    display.append(myDiv)
}

