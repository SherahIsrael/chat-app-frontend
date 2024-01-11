// backend code

const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// OpenAI key goes here

const API_KEY ='';

// Create a Post request for the API

app.post ('/chat', async (req,res)=>{

   const options = {
    method: "POST",
    headers : {
        "Authorization" : `Bearer${API_KEY}`,
        "Content-type": "application/json"

    },

    // OpenAI Hyperparameters

    body: JSON.stringify({
     model: "gpt-3.5-turbo",
     messages: [{role: "user", content: "how are you?"}],
     max_tokens : 100, 


    })


   } 

   // catch any unexpected errors

   try {

      const response = await fetch('https://api.openai.com/v1/chat', options)
      const data = await response.json()
      res.send(data)
   
   }

   catch(error) {


   }

})

app.listen(PORT,()=> console.log('Your server is running on PORT' + PORT))