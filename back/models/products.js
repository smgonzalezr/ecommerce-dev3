const mongoose = require("mongoose");

//defnir el esquema de productos...
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter Product Name..."],
        trim:true,
        maxLength:[120,"Product Name must not exceed 120 characters..."]
    },
    price:{
        type:Number,
        required:[true,"Please enter Product Price..."],
        maxLength:[7,"Product price must not exceed 7 digits..."],
        default:0.0
    },
    description:{
        type:String,
        required:[true,"Please enter Product Description..."]
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    rate:{
        type:Number,
        default:0
    },
    image:[
        {
            public_id:{
                type:String,
                required:[true]
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true, "Please select the Product Category..."],
        enum:{
            values:[
                "Knee high boots",
                "Insulated boots",
                "Boots,",
                "work boots",
                "Combat boots",
                "Platform heels",
                "Sport Shoes"
            ]
        }
    },
    quantity:{
        type:Number,
        required:[true,"Please enter Product QTY"],
        maxLength:[5,"Product QTY must not exceed 7 digits..."],
        default:0
    },
    ratedNumber:{
        type:Number,
        default:0
    },
    reviews:{
        customerName:{
            type:String,
            required:false
        },
        rating:{
            type:Number,
            required:false
        },
        remark:{
            type:String,
            required:false
        }
    }

})

module.exports = mongoose.model("products",productSchema);