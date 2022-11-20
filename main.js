const pago = document.getElementById('pago').value
console.log(pago)
const person = document.getElementById('person').value
console.log(person)
const btns = document.querySelectorAll('button.btns')
console.log(btns)

let personAmount = document.querySelector('p.personAmount')
console.log(personAmount)

btns.forEach(e => {
    e.addEventListener('click', e => {
        let infBtns = parseInt(e.target.innerText.slice(0, -1))
        console.log(infBtns)
    })
})