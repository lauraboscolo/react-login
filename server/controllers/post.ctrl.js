const Post = require('../models/Post');
//const Candidate = require('../models/Candidate');
//const fs = require('fs');
const cloudinary = require('cloudinary');

module.exports = {
    addPost: (req, res, next) => {
        let { text, title, claps, description } = req.body
        if (req.files.image) {
            cloudinary.uploader.upload(req.files.image.path, (result) => {
                let obj = { text, title, claps, description, feature_img: result.url != null ? result.url : '' }
                savePost(obj)
            },{
                resource_type: 'image',
                eager: [
                    {effect: 'sepia'}
                ]
            })
        }else {
            savePost({ text, title, claps, description, feature_img: '' })
        }
        function savePost(obj) {
            new Post(obj).save((err, post) => {
                if (err)
                    res.send(err)
                else if (!post)
                    res.send(400)
                else {
                    return post.addAuthor(req.body.author_id).then((_post) => {
                        return res.send(_post)
                    })
                }
                next()
            })
        }
    },
    getAll: (req, res, next) => {
        Post.find(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err, post)=> {
            if (err)
                res.send(err)
            else if (!post)
                res.send(404)
            else
                res.send(post)
            next()            
        })
    },
    /**
     * post_id
     */
    clapPost: (req, res, next) => {
        Post.findById(req.body.post_id).then((post)=> {
            return post.clap().then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },
    /**
     * comment, author_id, post_id
     */
    commentPost: (req, res, next) => {
        Post.findById(req.body.post_id).then((post)=> {
            return post.comment({
                author: req.body.author_id,
                text: req.body.comment
            }).then(() => {
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },
    /**
     * post_id
     */
    getPost: (req, res, next) => {
        Post.findById(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err, post)=> {
            if (err)
                res.send(err)
            else if (!post)
                res.send(404)
            else
                res.send(post)
            next()            
        })
    }
}