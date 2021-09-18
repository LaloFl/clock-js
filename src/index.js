//getElements
const hourbox1 = document.getElementById('box1')
const hourbox2 = document.getElementById('box2')
const minutebox1 = document.getElementById('box3')
const minutebox2 = document.getElementById('box4')
const secondbox1 = document.getElementById('box5')
const secondbox2 = document.getElementById('box6')
const setHour = () => {
    clearHour();
    //parse time
    time = new Date().toTimeString();
    const hour1 = time[0]
    const hour2 = time[1]
    const minute1 = time[3]
    const minute2 = time[4]
    const second1 = time[6]
    const second2 = time[7]

    //setcolor
    hourbox1.getElementsByClassName(`b1n${hour1}`)[0].classList.add('selected')
    hourbox2.getElementsByClassName(`b2n${hour2}`)[0].classList.add('selected')
    minutebox1.getElementsByClassName(`b3n${minute1}`)[0].classList.add('selected')
    minutebox2.getElementsByClassName(`b4n${minute2}`)[0].classList.add('selected')
    secondbox1.getElementsByClassName(`b5n${second1}`)[0].classList.add('selected')
    secondbox2.getElementsByClassName(`b6n${second2}`)[0].classList.add('selected')

    //animation
    const height = hourbox1.children[0].clientHeight
    hourbox1.style.bottom = `${hour1*height}px`
    hourbox2.style.bottom = `${hour2*height}px`
    minutebox1.style.bottom = `${minute1*height}px`
    minutebox2.style.bottom = `${minute2*height}px`
    secondbox1.style.bottom = `${second1*height}px`
    secondbox2.style.bottom = `${second2*height}px`
    
    //recursion every second
    setTimeout(setHour, 1000)
}
const clearHour = () => {
    const boxes = document.getElementsByClassName('main-container')[0].children
    for(let box of boxes) {
        const numbers = box.children;
        for(let i = 0; i < numbers.length; i++) {
            numbers[i].classList.remove('selected');
        }
    }
}
setHour();