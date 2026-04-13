import mongoose from "mongoose"
const PostSchema = mongoose.Schema({
  companyname:{
    type: String,
    required: true
  },
  jobs:[],
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
