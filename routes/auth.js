/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const express = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validar-jwt');
const {registerUser, loginUser, renewToken} = require('../controllers/auth');


const router = express.Router();


router.post(
    '/new',
    [   // Middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe ser de 6 caracteres').isLength({ min: 6 }),
        validateFields
    ],
    registerUser
);

router.post(
    '/',
    [   // Middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe ser de 6 caracteres').isLength({ min: 6 }),
        validateFields
    ],
    loginUser
);

router.get('/renew', validateJWT, renewToken);

module.exports = router;