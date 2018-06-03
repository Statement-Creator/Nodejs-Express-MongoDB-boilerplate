const express= require('express');
const router= express.Router();

const Comment = require('../model/comment');

//inserting a comment
router.post('/commentpost', (req,res,next)=>{
    let newcomment = new Comment({
        commentText: req.body.commentText
    });
    newcomment.save((err,text)=>{
        if(err){
          res.json(err);
        }else{
          res.json(text)
        }
      });
})

//getting all comments
router.get('/comments',(req,res,next)=>{
    Comment.find(function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
});

module.exports = router;