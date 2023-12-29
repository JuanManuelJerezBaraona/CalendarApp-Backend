/* 
    Events Routes
    host + /api/events
*/

const express = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validateFields } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validar-jwt');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = express.Router();

// Todas tienen que pasar por la validación de JWT
router.use(validateJWT);



// Obtener eventos
router.get('/', getEvents);

// Crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        check('end', 'La fecha de finalización es obligatoria').custom(isDate),
        validateFields
    ],
    createEvent
);

// Actualizar un evento
router.put(
    '/:id',
    [

    ],
    updateEvent
);

// Borrar un evento
router.delete(
    '/:id',
    [

    ],
    deleteEvent
);

module.exports = router;