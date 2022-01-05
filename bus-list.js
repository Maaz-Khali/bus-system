/////---pessenger

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

//////

const list = document.querySelector('#list')
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

    
        const add_btn = document.createElement('button')
        const add = document.createElement('a')
        
        add_btn.textContent= 'Add pesseenger'
        add.appendChild(add_btn)
        
        Object.values(b).forEach(ans=>{
            let head = document.createElement('td')
        let text = document.createTextNode(ans)
        head.appendChild(text)
        text_row.appendChild(head)
        add.addEventListener('click', (e)=>{
            location.assign(`pssenger.html#${b.Bus_no}`)
        })
       

        })
        
        
        add.appendChild(add_btn)
        text_row.appendChild(add)
        table.appendChild(text_row)
    })
    list.appendChild(table)

document.querySelector('#back').addEventListener('click', ()=>{
    location.assign('index.html')
})



