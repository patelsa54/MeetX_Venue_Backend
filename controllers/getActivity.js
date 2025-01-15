const Activity = require("../models/activity");

exports.getActivity = async(req,res) => {
    try {
            const response = await Activity.find({});
            res.status(200)
            .json({
                success:true,
                data:response,
                message:"Entire Activity Data is fetched",
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


exports.getActivityById = async(req, res) => {
    try {
       const id = req.params.id;
       const response = await Activity.findOne( {activityID: id})

       if(!response) {
        return res.status(404).json({
            success:false,
            message:"No Data Found with Given Id",
        })
       }

       res.status(200).json({
        success:true,
        data:response,
        message: `Activity ${id} data successfully fetched`,
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
