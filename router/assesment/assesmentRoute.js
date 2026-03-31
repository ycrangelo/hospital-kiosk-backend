import express from "express";

import { post } from "../../controller/assesment/post/post.js";
import { get } from "../../controller/assesment/get/get.js";

const router = express.Router();

router.post("/create", post);
router.get("/get", get);

export default router;