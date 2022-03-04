

const list = document.querySelector('#list')// div element
//header of a table
let headers = ['Bus Number', 'Departure Time', 'Departure Location', 'Arrival Time', 'Arrival Lcation', 'Total Seats']

    let table = document.createElement('table')
    let row = document.createElement('tr')
    

    headers.forEach(head=>{
        let header = document.createElement('th')
        let note = document.createTextNode(head)
        header.appendChild(note)
        row.appendChild(header)
    })
    table.appendChild(row)

    bus.forEach(b=>{
        let text_row = document.createElement('tr')

        ///////----creating "add passenger button in table"
        const add_btn = document.createElement('button')
        const add = document.createElement('a')
        add_btn.textContent= 'Add passeenger'


        ////----creating Seat button
        const seat_btn = document.createElement('button')
        const seat = document.createElement('a')
        seat_btn.textContent= 'Available Seats'
        seat.appendChild(seat_btn)

        // ///////--creating pessenger btn
        // const psn_btn =document.createElement('button')
        // const psn = document.createElement('a')
        // psn_btn.textContent= 'Passenger'
        // psn.appendChild(psn_btn)
        

        ////////-----Displaying the values of bus object of array
        Object.values(b).forEach(ans=>{
            let head = document.createElement('td')
        let text = document.createTextNode(ans)
        head.appendChild(text)
        text_row.appendChild(head)

        //////-----asigning locataion to add button
        add.addEventListener('click', (e)=>{
         location.assign(`pssenger.html#${b.Bus_no}`)
            // console.log(b.Seat)
     
        })

        //////-----asigning locataion to seat button
        seat.addEventListener('click', (e)=>{
            location.assign(`seat.html#${b.Bus_no}`)
            
            console.log(b.Seat)
           })
        //    psn.addEventListener('click', (e)=>{
        //     location.assign(`passenger-list.html#${b.Bus_no}`)
        //    })
            
           
        })
       

        

        
        //appending add button
        add.appendChild(add_btn)
        text_row.appendChild(add)


         
         
        text_row.appendChild(seat)
        // text_row.appendChild(psn)
        
        table.appendChild(text_row)

        
    })
    list.appendChild(table)


    // console.log(bus.Seat)
document.querySelector('#back').addEventListener('click', ()=>{
    location.assign('index.html')
})

const search_bus=() => {
    let input= document.getElementById('search').value.toUpperCase();
    let tr = table.getElementsByTagName('tr')
    for (let index = 0; index < tr.length; index++) {
        let td = tr[index].getElementsByTagName('td')[0];
        if (td){
            let text = td.textContent || td.innerHTML
            if (text.toUpperCase().indexOf(input) > -1) {
                tr[index].style.display  ='';

            } else {
                tr[index].style.display  ="none";
            }
        }
    }
 }


