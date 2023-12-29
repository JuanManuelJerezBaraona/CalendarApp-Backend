const express = require('express');

const getEvents = async(req, res = express.response) => {
    res.json({
        ok: true,
        msg: 'getEvents'
    });
}

const createEvent = async(req, res = express.response) => {
    res.json({
        ok: true,
        msg: 'getEvents'
    });
}

const updateEvent = async(req, res = express.response) => {
    res.json({
        ok: true,
        msg: 'getEvents'
    });
}

const deleteEvent = async(req, res = express.response) => {
    res.json({
        ok: true,
        msg: 'getEvents'
    });
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}