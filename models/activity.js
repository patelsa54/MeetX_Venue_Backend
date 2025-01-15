const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
    {
        activityID: {
            type:Number,
            required:true,
            unique:true
        },
        activityName:{
            type:String,
            required:true
        },
        activityCount: {
            type:Number,
            required:true
        },
        activityIcon: {
            type:String,
            required:true
        },
        preferenceNumber: {
            type:Number,
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

module.exports = mongoose.model("Activity", activitySchema);