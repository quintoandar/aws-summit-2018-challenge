# AWS Challenge 

Crie um serviço simples que integre com [essa API](https://aws-challenge.quintoandar.com.br/apidocs/). Esperamos que você crie um _form_ simples que envie os dados necessários.

## Instruções

Use git para criar uma nova branch para sua solução:

```bash
$ git checkout master
$ git checkout -b meu-nome
```

Você pode escolher entre dois desafios:

### Desafio A: Build and Deploy

Construa uma aplicação simples em qualquer linguagem, capaz de enviar o _payload_ necessário para [nossa API](https://aws-challenge.quintoandar.com.br/apidocs/), e servir o campo `msg` retornado no formato JSON pela API na porta 80. Você terá de fazer o deploy usando nossa solução de integração contínua!

Para isso você precisará criar um **Dockerfile**. O Dockerfile é consumido servidor de integração que faz o _deploy_ no AWS Elastic Container Service.

1.  Crie uma aplicação (em qualquer linguagem) que envie o _payload_ necessário para [nossa API](https://aws-challenge.quintoandar.com.br/apidocs/)
2.  Imprima a resposta `msg` na porta 80
3.  Edite o Dockerfile para rodar sua aplicação
4.  Faça um _commit_ e _push_ de sua branch para o github:

    ```bash
    $ git commit -am "meu commit"
    $ git push -u origin meu-nome
    ```

*Important:* most webservers need to be configured to run on host "0.0.0.0" within docker!

5.  Acesse sua aplicação em uma das URLs e verifique a resposta!

    ```
    app-a.quintoandar.com.br
    app-b.quintoandar.com.br
    ```

### Desafio B: PWA Frontend

Usando _react_, construa um _form_ para inserir suas informações a [essa API](https://aws-challenge.quintoandar.com.br/apidocs/), e exibir o campo `msg` retornado.

1.  Acesse a pasta `front`
2.  Crie uma página que se pareça com a seguinte, você pode usar componentes de [material-ui](https://material-ui.com/):

    ![aws-summit-pwa form](https://user-images.githubusercontent.com/22302138/41689036-1bb5027c-74c5-11e8-8d91-ed6022bda8b5.png)

3.  Verifique que todos os campos foram preenchidos:

    ![aws-summit-pwa validate](https://user-images.githubusercontent.com/22302138/41689096-6c261656-74c5-11e8-93f3-b3d68a4685b0.png)

4.  Imprima a resposta `msg`:

    ![aws-summit-pwa api response](https://user-images.githubusercontent.com/22302138/41689173-c504a454-74c5-11e8-828f-6b91700e7f43.png)

Para rodar a aplicação:

```bash
$ npm start
```

A aplicação ficará disponível na porta `localhost:3000`.

## Super Desafio

Faça os desafios A e B e receba um prêmio especial!
