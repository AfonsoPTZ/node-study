import express from "express";
import cors from "cors";


function CreateApp(){

    const app = express()

    app.use(express.json());

    app.use(cors());


    console.log("hello world!")

    return app;

}

export default CreateApp();
