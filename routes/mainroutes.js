const express  = require("express");
const router = express.Router();

const {createVenue} = require("../controllers/createVenue");
const {createActivity} = require("../controllers/createActivity");
const {getVenue, getVenueById} = require("../controllers/getVenue");
const {getActivity, getActivityById} = require("../controllers/getActivity");

//API routes
router.post("/createVenue", createVenue);
router.post("/createActivity", createActivity);
router.get("/getVenue", getVenue);
router.get("/getVenue/:id", getVenueById);
router.get("/getActivity", getActivity);
router.get("/getActivity/:id", getActivityById);

module.exports = router;