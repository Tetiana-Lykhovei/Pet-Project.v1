const express = require("express")
const mongoose = require("mongoose")
const exphbs = require("express-handlebars")
const todosRoutes = require("./routes/todos")
const path = require("path")

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    dafaultLayout: "main",
    extname:"hbs"
})

app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "views")

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))
app.use(todosRoutes)


async function start(){
    try {
        await mongoose.connect("mongodb+srv://Litava:753951@cluster0.1epzw.mongodb.net/todos", {
            useNewUrlParser: true,
            useFindAndModify: false
        })
    app.listen(PORT, ()=>{
    console.log("Server has been started...")
})
    } catch(e) {
        console.log(e)
    }
}

start()




