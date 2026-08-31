const express = require("express")
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'event_loop')))


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})
app.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','about.html'))
})
app.get('/projects', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','projects.html'))
})
app.get('/goals', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','goals.html'))
})
app.get('/contact', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','contact.html'))
})
app.get(/.*/, (req, res)=>{
    res.sendFile(path.join(__dirname,'views','error.html'))
})   

app.listen(PORT,()=>{
    console.log(`Server started listening on http://localhost:${PORT}`)
})