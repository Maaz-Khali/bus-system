bus.forEach(a => {
    
    for (let index = 1; index < a.Seat; index++) {
        const square = document.createElement('div')
        square.classList= "box"
        document.body.appendChild(square)
        console.log(a.Seat)
    }
});

