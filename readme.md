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
Retorna todos os produtos do banco de dados em ordem alfabética, o modelo de retorno pode ser visto abaixo:
```json
[
	{
		"id_product": 1,
		"name": "Açaí",
		"price": "18.00000",
		"image_path": ""
	},
	{
		"id_product": 2,
		"name": "Blusa",
		"price": "35.50000",
		"image_path": ""
	},
]
```

### (GET) ~/news/recents/{start}/{end}
Deverá retornar todos as notícias mais recentes do banco de dados. As variáveis **start** e **end** representam a quantidade de notícias a serem apresentadas, por exemplo, o navegador irá passar 0 e 5, então deverá passar as 5 notícias mais recentes iniciando de 0, se informar 5 e 10, sendo 5 para **start** e 10 para **end**, deverá informar as 5 notícias mais recentes após as 5 anteriores, no caso seriam apresentadas as notícias *6, 7, 8, 9 e 10*. As notícias deverão ser retornadas por ordem de mais rescente e devem estar ativas no banco de dados.

#### Exemplo de requisição:
> ~/news/recents/0/5

#### Exemplo de retorno
```json
[
	{
		"id_news" : 1,
		"title": "O título da matéria",
		"text": "O conteúdo da matéria",
		"image_path": "O caminho para a imagem",
		"created_at_utc": "data em que foi criada, a data deve estar em UTC"
	},
	{
		"id_news" : 1,
		"title": "O título da matéria",
		"text": "O conteúdo da matéria",
		"image_path": "O caminho para a imagem",
		"created_at_utc": "data em que foi criada, a data deve estar em UTC"
	},
]
```