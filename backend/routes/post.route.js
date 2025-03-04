import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { commentOnPost, createPost, deletePost, likeUnlikePost, getAllPosts, getLikedPosts, getFollowingPosts,getUserPosts } from "../controllers/post.controller.js";


const router = express.Router();

router.get("/all", protectRoute, getAllPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.post("/create", protectRoute, createPost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.get("/user/:username", protectRoute, getUserPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.delete("/delete/:id", protectRoute, deletePost);

export default router;