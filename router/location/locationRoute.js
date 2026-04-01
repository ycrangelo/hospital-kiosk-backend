import express from "express";

import { get } from "../../controller/location/get/get.js";
import { post } from "../../controller/location/post/post.js";


const router = express.Router();

router.get("/get", get);
router.post("/post", post);
    

export default router;