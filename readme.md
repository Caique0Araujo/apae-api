# Instruções de uso para a API da APAE

## Primeiros Passos
Comece criando o banco de dados da APAE no seu *MYSQL*, para tal basta executar o arquivo **script.sql** na raiz do projeto. Caso deseje também inserir dados fakes, execute o arquivo **mock-script.sql**.<br/>
Após realizado o passo anterior, será necessário duplicar o arquivo **example.env** e renomeá-lo para **.env**. Após realizado o passo, você deverá configurar o arquivo com as configurações do seu banco de dados *MySQL*.
<br/>

Arquivo .env
```.env
DB_NAME=apae
DB_USER=root
DB_HOST=localhost
DB_DRIVER=mysql
DB_PASSWORD=
SERVER_PORT=3333
SERVER_TYPE=express
SERVER_DATABASE=sequelize
SERVER_CORS=http://127.0.0.1:5173
```

<hr/>

## Executando a API
Para executar a API, abra o CMD na pasta raiz da API e digite o comando abaixo:
```
npm run dev
```

<hr/>

## Rotas da API

### (GET) ~/products/all
Retorna todos os produtos do banco de dados, o modelo de retorno pode ser visto abaixo:
```json
[
	{
		"id_product": 1,
		"name": "Açaí",
		"description": "Um açaí top de qualidade duvidosa, o qual pode te deixar com dor de barriga",
		"price": "18.00000",
		"image_path": ""
	},
	{
		"id_product": 2,
		"name": "Blusa",
		"description": "Uma blusa pra vc",
		"price": "35.50000",
		"image_path": ""
	},
]
```