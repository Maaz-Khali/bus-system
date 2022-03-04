const getBusses = () => {
    let BusJSON =  localStorage.getItem('bus')
    return BusJSON ? JSON.parse(BusJSON):[]
}

let bus= getBusses()

const setBusses=  (bus)=>{
    localStorage.setItem('bus', JSON.stringify(bus))
}



const getPessenger = () => {
    let PessengerJSON =  localStorage.getItem('pessenger')
    return PessengerJSON ? JSON.parse(PessengerJSON):[]
}

let pessenger = getPessenger()
const setPessenger=  (Pessenger)=>{
    localStorage.setItem('pessenger', JSON.stringify(Pessenger))
}
