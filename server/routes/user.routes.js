const UserControllers = require("../controllers/user.controller")


module.exports = (app) => {
    app.get("/api/restousers", UserControllers.findALLUsers)
    app.post("/api/restousers", UserControllers.newUser)
    app.get("/api/restousers/:id", UserControllers.findOneUser)
    app.put("/api/restousers/:id", UserControllers.updateOneUser)
    app.delete("/api/restousers/:id", UserControllers.deleteUser)
}