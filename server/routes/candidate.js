const candidatecontroller = require('./../controllers/candidate.ctrl')

module.exports = (router) => {

    /**
     * get a candidate
     */
    router
        .route('/candidate/:id')
        .get(candidatecontroller.getCandidate)

    /**
     * get a candidate profile
     */
    router
        .route('/candidate/profile/:id')
        .get(candidatecontroller.getCandidateProfile)

    /**
     * adds a candidate
     */
    router
        .route('/candidate')
        .post(candidatecontroller.addCandidate)

    /**
     * follow a candidate
     */
    router
        .route('/candidate/follow')
        .post(candidatecontroller.followCandidate)
}