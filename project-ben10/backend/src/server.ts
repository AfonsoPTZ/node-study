// Carrega variáveis de ambiente do arquivo .env
import "dotenv/config";
import CreateApp from "./app";

// Cria instância da aplicação Express
const app = CreateApp;

// Obtém a porta do arquivo .env ou usa 3000 como padrão
const port = process.env.PORT || 3000;

// Inicia o servidor e exibe mensagem de confirmação
app.listen(port, () => {
    console.log(`\n🚀 Servidor iniciado na porta ${port}`);
    console.log(`📚 Aliens API - Ben 10\n`);
});

