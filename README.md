# Descrição do projeto

API Rest criada utilizando Node + express + JavaScript Vanila para o resumo de informação de arquivos PDF's, utilizando integração junto com a API do chatGPT e da OpenAI.

## Objetivos:

Esse projeto foi desenvolvido com duas finalidades:

1. **Resolver um problema de rotina que consistia em ler varias informações provinientes de arquivos PDF's e realizar um resumo dessas informações.**
2. **Realizar resumo de videos, atraves da transcrição de áudio (ainda não foi implementado)**
3. **Praticar e aperfeiçoar conhecimentos e habilidades técnicas na área de Back-End.**

## Tecnologias:

* Foi utilizado o Ambiente do Node para a execuação do servidor.
* O banco de dados utilizados para armazernar as informações dos usuários foi o **MariaDB, um banco de dados estruturados**.
* **A linguagem utilizada foi JavaScript**
* Os principais frameworks utilizados foram: **Express, pdf-parser e o multer** para manipular os arquivos enviados pelas requisições.


## Como utilizar:

1. **Rodar o comando ```git clone``` neste repóstiorio**
2. **Deve-se rodar o comando: ```npm i ``` para instalar os pacotes do node.**

3. **É nescessário a criação de uma pasta ```uploads/documents```, local este que será armazenado os arquivos PDF's.**

Após isso é so rodar o comando **```npm run dev```** para iniciar o servidor.


Por enquanto a API está apenas disponivel localmente, **sendo nescessário ter uma conta na openAI e uma chave de acesso da API deles**, então deve-se criar um arquivo **```.env```**, que contenha **```API_KEY```** e outras variáveis de ambiente, principalmente as de banco de dados.

**Obs: Em um futuro próximo, planejo fazer deploy da API atráves da plataforma AWS, como forma de estudar a plataforma e Docker.**

## Endpoints

### Rota de usuários:

* a rota **```users/create```** é responsável pela a criação de usuário na base de dados. É nescessário mandar na requisição as variáveis **```user_email="Seu melhor email"```** e **```user_password="Sua senha"```** para o êxito da criação do usuário na base de dados.

* a rota **```users/recovery```** é responsável pela recuperação do usuário na base de dados. **esta rota ainda está sendo implementada.**

* a rota **```user/update```** é responsável por alterar informações do usuário, como o email e a senha.

### Rota dos tokens

* Para se manter conectado e ser possivel a validação do usuário para a funcionalidade do sistema, é **nescessário que cada usuario cadastre um token de acessdo atráves da rota ```tokens/```**, passando como corpo da requisição o **```user_email```** e o **```user_password```** como campos para validação.

## Rota assistant

* A rota **```assistant/```** será retirada em breve, pois ela é so utilizada para teste de integração com a API do chatGPT, entretanto para masi informações, essa rota permite que mandemos mensagens normalmente para iniciar uma conversa.

* A rota principal é **```assistant/uploads/```** a qual é feito o envio do arquivo PDF após a verificação de login do usuário e após um certo tempo, será enviada a resposta com o resumo do arquivo pelo chatGPT.

**Obs: No momento a API realiza a extração de informação de arquivos PDF's simples, sendo esse um ponto a ser melhorado no futuro para que possa ser feito a extração de arquivos com conteúdos mais complexos.**

### Provaveis futuras implementações:

- Extração do conteudo de videos através da transcrição do audio e seu conteudo enviado ao chat para fazer um resumo do video.

- Melhorar a extração de informação de arquivos PDF's,principalmente arquivos que possuem imagens, tabelas e etc.
