const express = require('express');
const Event = require('../models/Event');

const getEvents = async(req, res = express.response) => {

    const events = await Event.find()
                              .populate('user', 'name');

    return res.json({
        ok: true,
        events
    });
}

const createEvent = async(req, res = express.response) => {

    const event = new Event(req.body);

    try {

        event.user = req.uid;

        const savedEvent = await event.save();

        res.json({
            ok: true,
            event: savedEvent
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const updateEvent = async(req, res = express.response) => {
    res.json({
        ok: true,
        msg: 'updateEvent'
    });
}

const deleteEvent = async(req, res = express.response) => {
    res.json({
        ok: true,
        msg: 'deleteEvent'
    });
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}