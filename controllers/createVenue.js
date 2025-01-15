const Venue = require("../models/venue");

exports.createVenue = async(req,res) => {
    try {
    
            const {venueID,venueName,venueLocation,googleMapLink,venueImage,preferenceNumber,activityArray} = req.body;
            const response = await Venue.create({venueID,venueName,venueLocation,googleMapLink,venueImage,preferenceNumber,activityArray});
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
