// app.js
const express = require('express');
const bodyparser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const loginRouter = require('./routes/login')
const app = express();
const port = 4000;

app.use(bodyparser.urlencoded({extended:true}))

// Importing the request handler from routes.js
//const requestHandler = require('./routes');

// Middleware to parse JSON bodies
app.use(express.json());

// Routes setup using the imported request handler
//app.use('/', requestHandler);

app.use('/display-home',(req,res)=>{
       res.send('<h1> hello </h1>')
})

app.use(adminRoutes)
app.use(loginRouter)
app.use(shopRoutes)

app.use((req,res)=>{
     res.status(404).send('<h1> Page not found</h1>')
})
// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

