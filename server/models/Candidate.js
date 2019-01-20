const mongoose = require('mongoose')
let CandidateSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        provider: String,
        provider_id: String,
        token: String,
        provider_pic: String,
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Candidate'
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Candidate'
            }
        ]
    }
)
CandidateSchema.methods.follow = function (candidate_id) {
    if (this.following.indexOf(candidate_id) === -1) {
        this.following.push(candidate_id)        
    }
    return this.save()
}
CandidateSchema.methods.addFollower = function (fs) {
    this.followers.push(fs)        
}
module.exports = mongoose.model('Candidate', CandidateSchema)