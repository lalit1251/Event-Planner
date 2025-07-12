import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    number:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    photo:{

        type: String,
        required: true,
        default:""
    },
    gender:{

        type:String,
        enum:["male","female","other","N/A"],
        required:true,
        default:"N/A"
    },
    representing:{
        type: String,
        required:true,
        default:"N/A",
        enum:["Bride","Groom","both","N/A"],

    },
    occupation: {
      type: String,
      default: " N/A",
      required: true,
    },
    address: {
      type: String,
      default: "N/A",
      required: true,
    },
    city: {
      type: String,
      default: "N/A",
      required: true,
    },
    district: {
      type: String,
      default: "N/A",
      required: true,
    },
    state: {
      type: String,
      default: "N/A",
      required: true,
    },

},
{timestamps: true}
);

const User = mongoose.model("User",userSchema);

export default User;
