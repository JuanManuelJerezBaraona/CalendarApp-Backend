/* 
    Events Routes
    host + /api/events
*/

const express = require('express');
const { validateJWT } = require('../middlewares/validar-jwt');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = express.Router();

// Todas tienen que pasar por la validación de JWT
router.use(validateJWT);



// Obtener eventos
router.get('/', getEvents);

// Crear un nuevo evento
router.post('/', createEvent);

// Actualizar un evento
router.put('/:id', updateEvent);

// Borrar un evento
router.delete('/:id', deleteEvent);

module.exports = router;