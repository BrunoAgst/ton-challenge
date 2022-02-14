# Ton Challenge API

Esta API tem como objetivo verificar a quantidade de acessos do site [Ton](https://www.ton.com.br), criar um usuário e consultar o mesmo.

# Endpoints

A API conta com quatro endpoints:
- GET - /v1/counter - Consulta a quantidade de acessos ao site;
- PUT - /v1/counter - Incrementa o número de acessos ao site;
- GET - /v1/counter/{tax_id} - Retorna os dados de um único usuário;
- POST - /v1/counter - Cria cadastro do usuário.

# Configuração Inicial

## Instalação
Instalar as dependências:

```
npm install
```

## Configuração das variáveis de ambiente
Precisa configurar a url do banco de dados, para fazer isso precisa criar um arquivo chamado .env. Existe um arquivo de exemplo o .env.example.

Exemplo:
```
DB_HOST=mongodb+srv://<username>:<password>@cluster0.k5ocr.mongodb.net/ton
```
# Deploy
## Subindo Localmente 

Para subir a aplicação localmente basta utilizar o seguinte comando:

```
npm run local
```
## Deploy AWS
Fazendo deploy:

```
npm run deploy
```


Após executar o deploy, você deverá ver uma saída semelhante a:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-express-api.zip file to S3 (711.23 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: aws-node-express-api
region: us-east-1
stack: aws-node-express-api-dev

endpoints:
  PUT - https://xxxxxxx.execute-api.us-east-2.amazonaws.com/v1/counter
  GET - https://xxxxxxx.execute-api.us-east-2.amazonaws.com/v1/counter
  GET - https://xxxxxxx.execute-api.us-east-2.amazonaws.com/v1/user/{tax_id}
  POST - https://xxxxxxx.execute-api.us-east-2.amazonaws.com/v1/user
functions:
  api: aws-node-express-api-dev-api
```

# Invocação

## Consultando a quantidade de acessos ao site
Após a implantação bem-sucedida, você pode chamar o aplicativo criado via HTTP:

Exemplo:
```bash
curl https://xxxxxxx.execute-api.us-east-2.amazonaws.com/counter
```

O que deve resultar na seguinte resposta:

```
{ "numberOfHits": 64 }
```

## Incrementando número de acessos ao site
Para incrementar a quantidade de acesso basta fazer um put na rota counter.

Exemplo:
```bash
curl -X PUT https://xxxxxxx.execute-api.us-east-2.amazonaws.com/counter
```

O que deve resultar na seguinte resposta:

```
{ "message": "Update success" }
```

## Cadastrando um usuário
Para cadastrar um usuário precisar informar um json com os seguintes campos:
- name - obrigatório
- age - não obrigatório
- email - obrigatório
- tax_id - obrigatório

Exemplo: 
```
curl -X POST https://xxxxxxx.execute-api.us-east-2.amazonaws.com/counter/12345

```
```
{
    "name": "Bruno Augusto",
    "age": 25,
    "email": "bruno@teste.com",
    "tax_id": "12345"
}
```

O que deve resultar na seguinte resposta:
```
{ "message": "created success" }
```

## Consultando um usuário
Para consultar um usuário basta informar o cpf:

```
curl https://xxxxxxx.execute-api.us-east-2.amazonaws.com/counter/12345

```

O que deve resultar na seguinte resposta:
```
{   
  "name": "Bruno Augusto",
  "age": 25,
  "email": "bruno@teste.com",
  "tax_id": "12345"
}
```