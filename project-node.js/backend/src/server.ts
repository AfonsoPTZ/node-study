import CreateApp from "./app";
import "dotenv/config";

const app = CreateApp();

const port = process.env.PORT;


app.listen(port, () => {

    console.log("servidor ligado na porta " + port)

})