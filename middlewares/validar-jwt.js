const { response } = require('express');
const jwt = require('jsonwebtoken');



const validateJWT = (req, res = response, next) => {

    // x-token headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            message: 'No hay token en la petición'
        });
    }

    next();

}

module.exports = {
    validateJWT
}