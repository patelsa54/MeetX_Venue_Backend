const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema(
    {
        venueID: {
            type:Number,
            required:true,
            unique:true 
        },
        venueName:{
            type:String,
            required:true
        },
        venueLocation: {
            type:String,
            required:true
        },
        googleMapLink: {
            type:String,
            required:true
        },
        venueImage: {
            type:String,
            required:true
        },
        preferenceNumber: {
            type:Number,
            required:true
        },
        activityArray: {
            type: [String],
            required:true
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Venue", venueSchema);