/* 
    Events Routes
    host + /api/events
*/

const express = require('express');
const { validateJWT } = require('../middlewares/validar-jwt');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = express.Router();

// Todas tienen que pasar por la validación de JWT

// Obtener eventos
router.get('/', validateJWT, getEvents);

// Crear un nuevo evento
router.post('/', validateJWT, createEvent);

// Actualizar un evento
router.put('/:id', validateJWT, updateEvent);

// Borrar un evento
router.delete('/:id', validateJWT, deleteEvent);

module.exports = router;