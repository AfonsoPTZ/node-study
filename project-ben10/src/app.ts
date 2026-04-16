import express from "express";
import { alienRouterById, alienRouter, alienRouterCreator, alienRouterDelete, alienRouterUpdate }  from "./routes/aliens-route";

function CreateApp() {  

const app = express();

app.use(express.json());


app.use(alienRouter);
app.use(alienRouterById);
app.use(alienRouterCreator);
app.use(alienRouterDelete);
app.use(alienRouterUpdate);

return app;

}

export default CreateApp();
