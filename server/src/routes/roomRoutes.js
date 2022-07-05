const express = require("express");
const router = express.Router();
const roomControllers = require("../controllers/roomControllers")

router.get("/rooms", roomControllers.getRooms);
router.post("/rooms", roomControllers.createRoom);
router.put("/rooms/:name", roomControllers.editRoom);
router.delete("/rooms/:name", roomControllers.deleteRoom);


module.exports = router;