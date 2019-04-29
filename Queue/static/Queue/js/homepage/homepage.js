fetch('/get_services')
.then((response)=>{ return response.json() })
.then((response)=>{
    // displayCards(response,0)
    response.map((service)=>{
        homeApp.setState({services:[...homeApp.state.services,
            {service_name:service.service_name,currentNumber:service.current_number,serviceID:service.id}]})
    })
})

fetch('/get_news')
.then((response)=>{ return response.text() })
.then((response)=>{
    // displayCards(response,0)
    homeApp.setState({news:response})
})



// function displayCards(response,index) {
//     homeApp.setState({services:[...homeApp.state.services,
//     {service_name:response[index].service_name,currentNumber:response[index].current_number}]})
//     if (index <= response.length-1){
//         setTimeout(() => {
//             displayCards(response,index+1)
//         },30);
//     }
// }