/** */
const Candidate = require('./../models/Candidate')
const Post = require('./../models/Post')

module.exports = {
    addCandidate: (req, res, next) => {
        new Candidate(req.body).save((err, newCandidate) => {
            if (err)
                res.send(err)
            else if (!newCandidate)
                res.send(400)
            else
                res.send(newCandidate)
            next()
        });
    },
    getCandidate: (req, res, next) => {
        Candidate.findById(req.params.id).then
        /*populate('following').exec*/((err, candidate)=> {
            if (err)
                res.send(err)
            else if (!candidate)
                res.send(404)
            else
                res.send(candidate)
            next()            
        })
    },
    /**
     * candidate_to_follow_id, candidate_id
     */
    followCandidate: (req, res, next) => {
        Candidate.findById(req.body.id).then((candidate) => {
            return candidate.follow(req.body.candidate_id).then(() => {
                return res.json({msg: "followed"})
            })
        }).catch(next)
    },
    getCandidateProfile: (req, res, next) => {
        Candidate.findById(req.params.id).then
        ((_candidate) => {
            return Candidate.find({'following': req.params.id}).then((_candidates)=>{
                _candidates.forEach((candidate_)=>{
                    _candidate.addFollower(candidate_)
                })
                return Post.find({'author': req.params.id}).then((_posts)=> {
                    return res.json({ candidate: _candidate, posts: _posts })
                })
            })
        }).catch((err)=>console.log(err))
    }
}