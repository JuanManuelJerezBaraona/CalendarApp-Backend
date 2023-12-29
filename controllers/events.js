const express = require('express');

const getEvents = async(req, res = express.response) => {
    return res.json({
        ok: true,
        msg: 'getEvents'
    });
}

const createEvent = async(req, res = express.response) => {
    res.json({
        ok: true,
        msg: 'createEvent'
    });
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