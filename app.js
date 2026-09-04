const os = require('os')
const express = require("express")
const path = require('path')
const app = express()
const PORT = 3000

const { getDate } = require('./public/event_loop/utils/time.js');
const { getSystemInfo } = require("./public/event_loop/utils/system.js")

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})
app.get('/api/date', (req, res) => {
  res.json({ date: getDate(new Date()) });
});
app.get('/api/system', (req, res) => {
  res.json({ info: getSystemInfo(os) });
});
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
app.get('/server-info', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','info.html'))
})
app.get(/.*/, (req, res)=>{
    res.status(404)
    res.sendFile(path.join(__dirname,'views','error.html'))
})   


app.listen(PORT,()=>{
    console.log(`Server started listening on http://localhost:${PORT}`)
})