const express = require('express')
const cors = require('cors')
const { response } = require('express')
const app = express()
const PORT = 8000

//Response
//GET
//POST
//UPDATE
//DELETE


app.use(cors())

let rappers = {

    '21 savage':{
        'age':28,
        'birthName' : 'Sheyaa Bin Abraham-Joesph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 27,
        'birthName': 'Sheya Bin Abraham-Joesph',
        'birthLocation': 'London, England'
    },
    'unknown':{
        'age': 28,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
   
} 



app.get('/', (request, response) => {
    
    response.sendFile(__dirname + '/index.html')
});


app.get('/api/rappers/:rapperName', (request,response) =>{
  
    const rapName = request.params.rapperName.toLocaleLowerCase()
    console.log(rapName)
    if(rappers[rapName]){   
        response.json(rappers[rapName])
    } else{
        response.json(rappers['unknown'])
    }
 
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
});