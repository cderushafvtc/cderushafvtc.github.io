const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

localStorage.setItem("It's a secret to everybody.", "Eastmost peninsula is the secret.")

// Selecting the welcome div
const welcome = document.querySelector("#welcome")

// Creating the h3 element
const greeting = document.createElement("h3")

// Appending it to the welcome div
welcome.append(greeting)

// Setting the greeting text based on the time of the day
if (isMorning) {
    greeting.textContent = "Good Morning! Welcome to my website."
} else if (isAfternoon) {
    greeting.textContent = "Good Afternoon! Welcome to my website."
} else if (isEvening) {
    greeting.textContent = "Good Evening! Welcome to my website."
}