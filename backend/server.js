const express = require('express')
const app = express();
const usersRoute = require('./routes/users/usersRoute');
const accountsRoute = require('./routes/accounts/accountsRoute');
const transactionsRoute = require('./routes/transactions/transactionsRoute');
const dbConnect = require('./config/dbConnect');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const cors = require('cors');

// $DB Connection
dbConnect();


// $Middleswares
app.use(express.json()) //! To pass incoming data
// app.use(cors()); //! Cross origin middleware
app.use(cors({
    origin: ["link to website"],
    methods: ["POST", "GET"],
    credentials: true
}))

// $Routers --> "/tracker-api/v1/.."
// >users route
app.use('/tracker-api/v1/users/', usersRoute);

// >account route
app.use('/tracker-api/v1/accounts', accountsRoute);

// >transaction route
app.use('/tracker-api/v1/transactions', transactionsRoute);

// $Error Handlers
app.use(globalErrorHandler)

// dummy
app.get("/", (req, res) => {
    res.json("HELLO");
})

// $Server Listener
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`);
})
