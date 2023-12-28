const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const registerUser = async(req, res = express.response ) => {

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        
        if(user) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            });
        }

        user = new User(req.body);
    
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );

        await user.save();
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }


}

const loginUser = async(req, res = express.response) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        
        if(!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        // Confirmar las contraseñas
        const validPassword = bcrypt.compareSync( password, user.password );

        if(!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            });
        }

        // Generar JSON WEB TOKEN

        res.json({
            ok: true,
            uid: user.id,
            name: user.name
        });


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}

const renewToken = (req, res = express.response) => {
    
    res.json({
        ok: true,
        msg: 'renew'
    })

}



module.exports = { 
    registerUser,
    loginUser,
    renewToken
}