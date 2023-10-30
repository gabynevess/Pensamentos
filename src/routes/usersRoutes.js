const express = require("express")
const UsersControllers = require("../controllers/UsersControllers")

const router = express.Router()


router.get("/users", UsersControllers.findAllUsers)
router.post("/users", UsersControllers.createUser)
router.get("/users/:id", UsersControllers.findUser)
router.put("/users/:id", UsersControllers.updateUser)
router.delete("/users/:id", UsersControllers.deleteUser)

module.exports = router;