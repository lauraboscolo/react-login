const postcontroller = require('./../controllers/post.ctrl');
const multipart = require('connect-multiparty');
const multipartWare = multipart();

module.exports = (router) => {
    /**
     * get all posts
     */
    router
        .route('/posts')
        .get(postcontroller.getAll)
    /**
     * add an post
     */
    router
        .route('/post')
        .post(multipartWare, postcontroller.addPost)
    /**
     * comment on an post
     */
    router
        .route('/post/comment')
        .post(postcontroller.commentPost)
    /**
     * get a particlular post to view
     */
    router
        .route('/post/:id')
        .get(postcontroller.getPost)
}