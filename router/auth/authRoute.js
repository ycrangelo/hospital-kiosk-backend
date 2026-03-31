import express from "express";

import { postt } from "../../controller/auth/get/get.js";
import { post } from "../../controller/auth/post/post.js";
import update from "../../controller/auth/update/update.js";

const router = express.Router();

router.post("/login", postt);
router.post("/register", post);
router.put("/update", update);

export default router;