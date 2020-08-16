const express = require('express')
const router = require('express').Router()


router.use('/',require('./add'))

module.exports = router;