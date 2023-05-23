"use strict";

const router = require("express").Router();
const RouteController = require("../../../controller/routes/route-controller");


router.get('/', RouteController.getRoutes);

module.exports = router;
