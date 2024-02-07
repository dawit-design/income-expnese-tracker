const mongoose = require('mongoose')

//CONNECT

const dbConnect = async (req, res) => {
    try {
        await mongoose.connect('mongodb+srv://dawitdb:GwtcXVSPLEliXIko@blog.7txgzeh.mongodb.net/expense-tracker?retryWrites=true&w=majority')
        console.log("DB Connected Successfully")
    }catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

