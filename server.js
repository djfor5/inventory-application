import express from "express";
import mongoose from "mongoose";
import indexRouter from "./routes/indexRoutes.js";
import itemRouter from "./routes/itemRoutes.js";
import itemInstanceRouter from "./routes/itemInstanceRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";

const app = express()

const mongoDb = process.env.MONGODB_URI
mongoose.connect(mongoDb)

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)
app.use('/items', itemRouter)
app.use('/iteminstances', itemInstanceRouter)
app.use('/categories', categoryRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))