const MenuControllers = require("../controllers/controller")


module.exports = (app) => {
    app.get("/api/resto", MenuControllers.findALLItems)
    app.post("/api/resto", MenuControllers.newItem)
    app.get("/api/resto/:id", MenuControllers.findOneItem)
    app.put("/api/resto/:id", MenuControllers.updateOneItem)
    app.delete("/api/resto/:id", MenuControllers.deleteItem)
}