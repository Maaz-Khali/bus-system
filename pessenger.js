
const name = document.querySelector('#name')
const cnic = document.querySelector('#cnic')
const Contact = document.querySelector('#contact')
const index = bus.findIndex(x => x.Bus_no ===window.location.hash.substring(1));

if (pessenger.length <= bus[index]["Seat"]) {
    

document.querySelector('#Add_pessenger').addEventListener('click', (e)=>{

    pessenger.push({
         Name: name.value,
         CNIC: cnic.value,
         Contact: Contact.value,
         busNo: window.location.href.substring(1)
     })
     setPessenger(pessenger)
     document.location.reload(true)

})
} else {
    console.log("value exceeded")
}



console.log(pessenger)

document.querySelector('#back').addEventListener('click', ()=>{
    location.assign(`detail.html`)
})