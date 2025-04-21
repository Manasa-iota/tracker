import mongoose, { Schema } from "mongoose";
import {TackStatusEnum,AvailableTaskStatus} from "../utils/constants"

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
    },
    project:{
        type:Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    assignedTo:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    assignedBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        enum:AvailableTaskStatus,
        default:TackStatusEnum.TODO
    },
    attachments:{
        type:[{
            url:String,
            mimetype:String,
            size:Number
        }],
        default:[]
    }
},{timestamps:true})

export const Task = mongoose.model("Task",taskSchema);