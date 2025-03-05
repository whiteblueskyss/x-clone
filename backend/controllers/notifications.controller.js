import mongoose, { get } from "mongoose";
import Notification from "../models/notification.model.js";

export const getNotifications = async (req, res) => {
    try{
        
        const notifications = await Notification.find({to: req.user._id}).populate({
            path: "from",
            select: "username profileImg"
        });

        await Notification.updateMany({to:user._id}, {read: true});
        res.status(200).json(notifications);

    }catch(error){
        console.log("Error in getNotifications", error.message);
        res.status(500).json({error: "Internal server error in getNotifications"});
    }
};

export const deleteNotification = async (req, res) => {
    try{
        const userId = req.user._id;
        await Notification.deleteMany({to: userId});
        res.status(200).json({message: "Notifications deleted"});
    }catch(error){
        console.log("Error in deleteNotification", error.message);
        res.status(500).json({error: "Internal server error in deleteNotification"});
    }
}