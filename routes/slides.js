import express from "express";
const router = express.Router();
import { requireSignin, adminMiddleware } from "../controllers/auth.js"
import { createWebStory, fetchWebStoryBySlug, allstories, deletestory, updateStory, allwebstoryslugs } from "../controllers/webstories.js";

router.post('/webstory', requireSignin, adminMiddleware, createWebStory);
router.get('/webstories/:slug', fetchWebStoryBySlug);
router.get('/allwebstories', allstories);
router.get('/webstory-slugs', allwebstoryslugs);
router.delete('/webstorydelete/:slug', requireSignin, adminMiddleware, deletestory);
router.patch('/webstoriesupdate/:slug', requireSignin, adminMiddleware, updateStory);



export default router;