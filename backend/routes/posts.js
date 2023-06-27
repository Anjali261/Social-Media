const router = require("express").Router();
const Post = require("../models/Post")
//create a Post

router.post("/", async(req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)

    }catch(err){
        res.status(500).json(err);
    }
})
//update a Post
router.delete("/:id", async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("the post has been updated");
        }else{
            res.status(403).json("You can only update your post");
        }

    }
    catch(err){
        res.status(500).json("err")
    }
   

})
//Delete a Post

router.put("/:id", async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("the post has been deleted");
        }else{
            res.status(403).json("You can only delete your post");
        }

    }
    catch(err){
        res.status(500).json("err")
    }
   

})
//Like a Post
router.put("/:id/likes", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("the post has been liked")

        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("the post has been disliked");
        }

    }catch(err){
        res.status(500).json(err);
    }
})
//Get a Post

router.get("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    }catch(err){
        res.status(500).json(err)
    }
})
//Get Timeline Posts

router.get("/timeline/all", async(req,res) =>{
    try{
        const currentUser = await UserActivation.findById(req.body.userId)
        const userPosts = await Post.find({userId : currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map(friendId =>{
                return post.find({userId: friendId});
            })
        );
        res.json(userPosts.concat(...friendPosts))

    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;