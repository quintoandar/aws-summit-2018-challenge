# AWS Challenge

Crie um serviço simples que integre com [essa API](https://aws-challenge.quintoandar.com.br/apidocs/). Esperamos que você crie um _form_ simples que envie os dados necessários.

## Instruções

Use git para criar uma nova branch para sua solução:

```bash
$ git checkout master
$ git checkout -b meu-nome
```

Você pode escolher entre três desafios:

### Desafio A: DevOps

Acesse a pasta `devops`.

Você tem o código de um formulário com backend em python que interage com [nossa API](https://aws-challenge.quintoandar.com.br/apidocs/). Sua missão é criar um Dockerfile que rode a aplicação na porta 80.

1.  Crie um Dockerfile que rode a aplicação na porta 80
2.  Faça um _commit_ e _push_ de sua branch para o github:

    ```bash
    $ git commit -am "meu commit"
    $ git push -u origin meu-nome
    ```

3.  Acesse sua aplicação em uma das URLs e verifique a resposta!

    ```
    app-b.quintoandar.com.br/index.html
    ```

Você pode acompanhar o _deploy_ em `drone.staging.quintoandar.com.br`.

### Desafio B: Backend

Acesse a pasta `back`.

Construa um `webserver` simples em qualquer linguagem, capaz de enviar o _payload_ necessário para [nossa API](https://aws-challenge.quintoandar.com.br/apidocs/), e servir o campo `msg` retornado no formato JSON pela API em uma porta qualquer.

1.  Crie uma aplicação (em qualquer linguagem) que envie o _payload_ necessário para [nossa API](https://aws-challenge.quintoandar.com.br/apidocs/)
2.  Imprima a resposta `msg` em alguma porta
3.  Acesse seu webserver com o navegador ou curl e demonstre que está funcionando!

### Desafio C: PWA Frontend

Acesse a pasta `front`.

Usando _react_, construa um _form_ para inserir suas informações a [essa API](https://aws-challenge.quintoandar.com.br/apidocs/), e exibir o campo `msg` retornado.

1.  Crie uma página que se pareça com a seguinte, você pode usar componentes de [material-ui](https://material-ui.com/):

    ![aws-summit-pwa form](https://user-images.githubusercontent.com/22302138/41689036-1bb5027c-74c5-11e8-8d91-ed6022bda8b5.png)

2.  Verifique que todos os campos foram preenchidos:

    ![aws-summit-pwa validate](https://user-images.githubusercontent.com/22302138/41689096-6c261656-74c5-11e8-93f3-b3d68a4685b0.png)

3.  Imprima a resposta `msg`:

    ![aws-summit-pwa api response](https://user-images.githubusercontent.com/22302138/41689173-c504a454-74c5-11e8-828f-6b91700e7f43.png)

Para rodar a aplicação:

```bash
$ npm start
```

A aplicação ficará disponível na porta `localhost:3000`.
