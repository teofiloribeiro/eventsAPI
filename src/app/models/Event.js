const mongoose = require('../../database');

const EventSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    eventDate:{
        type: Date,
        required: true
    },
    guest: [{
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        email:{
            type: String
        },
        phone:{
            type: String
        }        
    }],

    location:{
        address:{
            street:{
                type:String
            },
            number:{
                type:String
            },
            state:{
                type:String
            },
            postalCode:{
                type:String
            }
        },
        x:{
            type: String
        },
        y:{
            type: String
        }
    },
    createBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createAt:{
        type:Date,
        default: Date.now
    }
});
const Event = mongoose.model('Event', EventSchema);;

module.exports = Event;