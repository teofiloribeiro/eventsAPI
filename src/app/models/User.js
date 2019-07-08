const mongoose = require('../../database');
const bcrypt = require ('bcryptjs')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    passwordResetToken:{
        type: String,
        select:false
    },
    passwordResetExpires:{
        type: Date,
        select: false
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});
UserSchema.pre('save', async function(next){
    this.password= await bcrypt.hash(this.password, 10);
    next();
})
const User = mongoose.model('User', UserSchema);

module.exports = User;