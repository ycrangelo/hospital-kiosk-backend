import express from "express";

import { post } from "../../controller/appointment/post/post.js";
import { get } from "../../controller/appointment/get/get.js";

const router = express.Router();

router.post("/create", post);
router.get("/get", get);

export default router;