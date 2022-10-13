const mongoose = require('mongoose');

const potentialConnectionSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    user2: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
},
{
    timestamps: true
}
);

const PotentialConnection = mongoose.model('PotentialConnection', potentialConnectionSchema);

module.exports = PotentialConnection;