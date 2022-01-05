
document.querySelector('#add_bus').addEventListener('click', (e)=>{
    location.assign('bus.html')
})
document.querySelector('#bus_detail').addEventListener('click', (e)=>{
    location.assign('detail.html')
})

// const buttonEl =document.querySelector('#bus_detail');
// const list = document.querySelector('#list')
// let headers = ['Bus Number', 'Departure Time', 'Departure Location', 'Arrival Time', 'Arrival Lcation', 'Total Seats']
// buttonEl.addEventListener('click', ()=>{
//     let table = document.createElement('table')
//     let row = document.createElement('tr')

//     headers.forEach(head=>{
//         let header = document.createElement('th')
//         let note = document.createTextNode(head)
//         header.appendChild(note)
//         row.appendChild(header)
//     })
//     table.appendChild(row)

//     bus.forEach(b=>{
//         let text_row = document.createElement('tr')

//         Object.values(b).forEach(ans=>{
//             let head = document.createElement('td')
//         let text = document.createTextNode(ans)
//         head.appendChild(text)
//         text_row.appendChild(head)
//         })
//         table.appendChild(text_row)


//     })

//     list.appendChild(table)
// })
