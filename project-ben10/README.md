## 🚀 Aliens API - Ben 10

Projeto Node.js com Express e TypeScript para gerenciar alienígenas do Ben 10.

### 📋 Requisitos

- Node.js 18+
- MySQL 8+
- npm

### 🔧 Configuração

#### 1. Instale as dependências
```bash
npm install
```

#### 2. Configure o arquivo `.env`
Crie ou edite o arquivo `.env` na raiz do projeto:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=aliens_db
PORT=3000
NODE_ENV=development
```

#### 3. Crie o banco de dados
Execute o arquivo `src/db/schema.sql` no seu MySQL:
```bash
mysql -u root -p seu_banco < src/db/schema.sql
```

### ▶️ Como rodar

```bash
# Modo desenvolvimento (com hot reload)
npm run dev
```

O servidor será iniciado em `http://localhost:3000`

### 📚 Endpoints disponíveis

#### GET - Buscar todos os aliens
```
GET /aliens
```

#### GET - Buscar um alien específico
```
GET /aliens/:id
```

#### POST - Criar um novo alien
```
POST /aliensCreate
Content-Type: application/json

{
  "name": "Diamante",
  "type": "Diamante",
  "special_ability": "Corpo de diamante - Impenetrável",
  "strength": 90,
  "speed": 40
}
```

#### PUT - Atualizar um alien
```
PUT /aliensUpdate/:id
Content-Type: application/json

{
  "name": "Novo Nome",
  "strength": 85
}
```

#### DELETE - Deletar um alien
```
DELETE /aliensDelete/:id
```

### 🏗️ Estrutura do projeto

```
src/
├── config/
│   └── db.ts                 # Configuração conexão MySQL
├── controllers/
│   └── aliens-controller.ts  # Controladores das rotas
├── middlewares/
│   └── validator-middleware.ts # Middlewares de validação
├── model/
│   └── aliens-model.ts       # Interfaces TypeScript
├── repositories/
│   └── aliens-repository.ts  # Acesso ao banco de dados
├── routes/
│   └── aliens-route.ts       # Definição das rotas
├── services/
│   └── aliens-service.ts     # Lógica de negócio
├── utils/
│   └── https-helper.ts       # Helpers de resposta HTTP
├── validator/
│   └── validor-alien.ts      # Validadores de dados
├── app.ts                    # Configuração Express
├── server.ts                 # Entrada da aplicação
├── db/
│   └── schema.sql            # Script SQL do banco
└── .env                      # Variáveis de ambiente
```

### 🔍 Validações

- **Name**: Obrigatório, string não vazia
- **Type**: Obrigatório, string não vazia
- **Special Ability**: Obrigatório, string não vazia
- **Strength**: Opcional, número entre 0-100
- **Speed**: Opcional, número entre 0-100
- **ID**: Deve ser um número válido

### 📝 Respostas HTTP

- `200 OK`: Operação bem-sucedida
- `204 No Content`: Sem conteúdo para retornar
- `400 Bad Request`: Dados inválidos
- `404 Not Found`: Recurso não encontrado

### ✨ Características

- ✅ Validação de dados em middleware
- ✅ Banco de dados MySQL com pool de conexões
- ✅ Tratamento de erros apropriado
- ✅ Código bem comentado e legível
- ✅ TypeScript com tipos fortes
- ✅ Variáveis de ambiente seguras
