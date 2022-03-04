let index = bus.findIndex(x => x.Bus_no ===window.location.hash.substring(1));
    const boxes = bus[index]["Seat"]
    
    for (let index = 0; index < boxes ; index++) {
        const square = document.createElement('div')
        square.classList= "box"
        
        document.body.appendChild(square)
       
    }
  
   /* for (let index = 0; index < pessenger.length; index++) {
        const element = document.createElement('div')
        element.classList= "fill"
        document.body.appendChild(element)
    }
        console.log(pessenger.length)
    
    */