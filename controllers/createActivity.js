const Activity = require("../models/activity");

exports.createActivity = async(req,res) => {
    try {
    
            const {activityID,activityName,activityCount,activityIcon,preferenceNumber} = req.body;
            const response = await Activity.create({activityID,activityName,activityCount,activityIcon,preferenceNumber});
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