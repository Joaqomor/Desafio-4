import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/view.router.js";


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded( {extended : true}));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.use("/", viewRouter)


const httpServer = app.listen(PORT, ()  => {
    console.log(`Express server running on local host : ${PORT}.`);
});