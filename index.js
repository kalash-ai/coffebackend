require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
res.send('Hello folks')
})

app.get('/youtube' , (req,res)=>{
res.send('<h2> Hello folks</h2>')
})
app.get('/login' , (req, res)=>{
  res.send('<h1>Pleas login at chai or code</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


// console.log("Chai or code")