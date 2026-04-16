import { Router } from "express";
import { getAlienNameController, getAlienNameControllerById, AlienCreateController, AlienDeleteController, AlienUpdateController  } from "../controllers/aliens-controller";

const alienRouter = Router();
const alienRouterById = Router();
const alienRouterCreator = Router();
const alienRouterDelete = Router();
const alienRouterUpdate = Router();


alienRouter.get("/aliens", getAlienNameController);
alienRouterById.get("/aliens/:id", getAlienNameControllerById);
alienRouterCreator.post("/aliensCreate", AlienCreateController);
alienRouterDelete.delete("/aliensDelete/:id", AlienDeleteController);
alienRouterUpdate.put("/aliensUpdate/:id", AlienUpdateController);

export { alienRouter, alienRouterById, alienRouterCreator, alienRouterDelete, alienRouterUpdate };