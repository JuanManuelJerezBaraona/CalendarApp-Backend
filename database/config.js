const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        mongoose.connect(process.env.DB_CONNECTION);


    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }

}