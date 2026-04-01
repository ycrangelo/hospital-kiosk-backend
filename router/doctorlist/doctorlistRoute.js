import express from "express";

import { get } from "../../controller/doctorlist/get/get.js";
import { post } from "../../controller/doctorlist/post/post.js";


const router = express.Router();

router.get("/get", get);
router.post("/post", post);
    

export default router;