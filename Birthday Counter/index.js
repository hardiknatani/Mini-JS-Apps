const bDay = document.getElementById("bDay")
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

bDay.dataset.min = (new Date().getFullYear() + "-" + new Date().getMonth() + new Date().getDate()).toString()


bDay.addEventListener("change", function () {

    function countdown() {
        const newArray = bDay.value.split('-')
        const currentDate = new Date()
        const upcomingBirthDay = new Date(newArray[0], newArray[1] - 1, newArray[2], 00, 00, 00, 00)

        const totalSeconds = (upcomingBirthDay - currentDate) / 1000
        const days = Math.floor(totalSeconds / 3600 / 24)
        const hours = Math.floor(totalSeconds / 3600 % 24)
        const minutes = Math.floor(totalSeconds / 60) % 60
        const seconds = Math.floor(totalSeconds % 60)

        daysEl.innerText = days
        hoursEl.innerHTML = formatTime(hours)
        minutesEl.innerHTML = formatTime(minutes)
        secondsEl.innerHTML = formatTime(seconds)




        function formatTime(time) {
            if (time < 10) {
                return `0${time}`
            }
            else { return time }

        }


    }

    setInterval(countdown, 1000)
})



