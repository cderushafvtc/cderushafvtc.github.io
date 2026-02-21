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


// Carousel
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

// Auto advance images every 5 seconds
setInterval(() => {
    currentImage++
    showImages()
}, 5000)

// Previous button
document.querySelector('#prev').addEventListener('click', () => {
    currentImage--
    showImages()
})

// Next button
document.querySelector('#next').addEventListener('click', () => {
    currentImage++
    showImages()
})