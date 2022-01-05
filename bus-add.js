const getBusses = () => {
    let BusJSON =  localStorage.getItem('bus')
    return BusJSON ? JSON.parse(BusJSON):[]
}
let bus= getBusses()

////--------------adding 
 const BusNo= document.querySelector('#Bus_no')
const DepTime= document.querySelector('#Dep_time')
const DepLoc= document.querySelector('#Dep_loc')
const ArrTime= document.querySelector('#Arr_time')
const ArrLoc= document.querySelector('#Arr_loc')
const Seats= document.querySelector('#seats')


const setBusses=  (bus)=>{
    localStorage.setItem('bus', JSON.stringify(bus))
}

document.querySelector('#back').addEventListener('click', (e)=>{
    location.assign('index.html')
})
document.querySelector('#submit').addEventListener('click', (e)=>{
    
    bus.push({
      
         Bus_no : BusNo.value,
     Dep_time : DepTime.value,
     Dep_location : DepLoc.value,
     Arr_time: ArrTime.value,
     Arr_location : ArrLoc.value,
     Seat: Seats.value
     })
     setBusses(bus)
     document.location.reload(true)
     
})
