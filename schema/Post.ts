import mongoose from "mongoose"
const PostSchema = mongoose.Schema({
  companyname:{
    type: String,
    required: true
  },
  jobs:[{
    name:String,
    hiringStatus:Boolean,
    locationType:String,
    salary:Number,
    salaryCurrency:String,
    description:String,
    postedAt: { 
    type: Date, 
    default: Date.now
    }
  }],
  location:{
    type: String,
    required: true
  },
  logo:{
    type: String,
  },
  industry:{
    type: String,
    required: true
  },
  about:{
    type: String,
    required: true
  },
  comment:{
    type: String,
    required: true
  }
})
const PostModel = mongoose.model("company",PostSchema)

export default PostModel;
