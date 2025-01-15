const Venue = require("../models/venue");

exports.getVenue = async(req,res) => {
    try {
            const response = await Venue.find({});
            res.status(200)
            .json({
                success:true,
                data:response,
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
