//////-----To add pessenger


const getPessenger = () => {
    let PessengerJSON =  localStorage.getItem('pessenger')
    return PessengerJSON ? JSON.parse(PessengerJSON):[]
}

let pessenger = getPessenger()
const setPessenger=  (Pessenger)=>{
    localStorage.setItem('pessenger', JSON.stringify(Pessenger))
}

const name = document.querySelector('#name')
const cnic = document.querySelector('#cnic')
const Contact = document.querySelector('#contact')


bus.forEach(b=>{


    Object.values(b).forEach(ans=>{



 for (let i = 0; i < b.Seat; i++) {
   



document.querySelector('#Add_pessenger').addEventListener('click', (e)=>{
   
    pessenger.push({
         Name: name.value,
         CNIC: cnic.value,
         Contact: Contact.value
     })
     setPessenger(pessenger)
     document.location.reload(true)
})
}
})

})
