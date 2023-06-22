console.log("I'm ready!");

/* Iteration 1 */

let driver = "Verstappen"
console.log("The driver is " + driver + ".")
let navigator = "Hamilton"
console.log("The navigator is "+ navigator + ".")



/* Iteration 2 */

let driverLength = driver.length
let navigatorLength = navigator.length


if (driverLength > navigatorLength){
  console.log("The driver has the longest name, it has " + driver.length + " characters. The navigator's name has "+ navigator.length + " characters.")
} if (navigatorLength > driverLength){
  console.log("The driver has the longest name, it has " + navigator.length + " characters. The navigator's name has "+ driver.length + " characters.")
} if (driverLength === navigatorLength){
  console.log("Wow, you both have equaly logn names of " + driver.length + " characters!")
}

/* Iteration 3 */

/* version 1 (simple but ugly) */
console.log(driver.charAt(0).toUpperCase(), driver.charAt(1).toUpperCase(), driver.charAt(2).toUpperCase(), driver.charAt(3).toUpperCase(), driver.charAt(4).toUpperCase(), driver.charAt(5).toUpperCase(), driver.charAt(6).toUpperCase(), driver.charAt(7).toUpperCase(), driver.charAt(8).toUpperCase(), driver.charAt(9).toUpperCase())

/* version 2 (cleaner!) */

const result = []
const driverUpperCase = driver.toUpperCase()

for(let i = 0; i < driverUpperCase.length; i++) {
  result.push(`${driverUpperCase[i]} `)
}

console.log(result.join(''))

/* reversed */

console.log(result.reverse().join(''))

/* sorted alphabetically */

let players = [driver, navigator]
let sortedPlayers = players.sort()

console.log(sortedPlayers)

console.log("Yo, the navigator goes first, definitely.") 

