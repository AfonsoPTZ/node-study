import { Router } from "express";
import { GetUsuarioControler, CreateUserControler, DeleteUserControler, updateUserControler } from "../controllers/usuario-controler";
import { validate } from "../middlewares/validator-middleware";
import { validateID, validateUserCreate } from "../validators/usuario-validator";



const UsuarioRouter = Router();
const CreateUser = Router();
const DeleteUser = Router();
const updateUser = Router();


UsuarioRouter.get("/Usuario", GetUsuarioControler);
CreateUser.post("/CreateUser", validate(validateUserCreate), CreateUserControler);
DeleteUser.delete("/DeleteUser/:id", validate(validateID), DeleteUserControler);
updateUser.put("/updateUser/:id", validate(validateID), updateUserControler);



export { UsuarioRouter, CreateUser, DeleteUser, updateUser };