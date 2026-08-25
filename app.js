const express = require("express")
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'event_loop')))


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'pages','index.html'))
})
// app.get('/about', (req,res)=>{
//     res.sendFile(path.join(__dirname,'pages','about.html'))
// })
// app.get(/.*/, (req, res)=>{
//     res.sendFile(path.join(__dirname,'pages','error.html'))
// })   

app.listen(PORT,()=>{
    console.log(`Server started listening on http://localhost:${PORT}`)
})