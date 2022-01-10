
const name = document.querySelector('#name')
const cnic = document.querySelector('#cnic')
const Contact = document.querySelector('#contact')
console.log(bus.length) 
if (pessenger.length<=bus.length) {
document.querySelector('#Add_pessenger').addEventListener('click', (e)=>{

    pessenger.push({
         Name: name.value,
         CNIC: cnic.value,
         Contact: Contact.value
     })
     setPessenger(pessenger)
     document.location.reload(true)

})
console.log(pessenger)

    
} else {
    console.log('value exceeded')
    
}




document.querySelector('#back').addEventListener('click', ()=>{
    location.assign(`detail.html`)
})