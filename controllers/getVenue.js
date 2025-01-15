const venue = require("../models/venue");
const Venue = require("../models/venue");
const Activity = require("../models/activity");


exports.getVenueDetails = async(req,res) => {
    try {
            const venueResponse = await Venue.find({});
            const activityResponse = await Activity.find({});

            res.status(200)
            .json({
                venue:venueResponse,
                activity:activityResponse,
                message:"Entire Venue Data is fetched",
            });
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
    }
}


exports.getVenueById = async(req, res) => {
    try {
       const id = req.params.id;
       const response = await Venue.findOne( {venueID: id})

       if(!response) {
        return res.status(404).json({
            success:false,
            message:"No Data Found with Given Id",
        })
       }

       res.status(200).json({
        success:true,
        data:response,
        message: `Venue ${id} data successfully fetched`,
       })

    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    
    }
}
