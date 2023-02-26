# aws-lambda.tf

🦃🦃🦃 Terraformで`AWS Lambda`をプロビジョニングするサンプルプロジェクトです。  

## 実行方法

以下のディレクトリで`AWS SAM`コマンドを実行します。  

```shell
sam build --use-container
sam deploy --guided
```

---

以下のパスにアクセスします。  

* /Prod (GET)
* /Prod (POST)
* /Prod (PUT)
* /Prod (DELETE)

`Hello ★メソッド名★`というレスポンスが返ってきます。  

## 環境情報

| Name | Version |
| --- | --- |
| AWS CLI | 2.9.17 |
| AWS SAM CLI | 1.73.0 |
| Docker | 20.10.17 |

## イロイロ情報

### AWS CLIのインストール

[公式ページ](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/install-cliv2.html)の説明に沿って、インストールします。  

### Dockerのインストール

[公式ページ](https://docs.docker.com/get-docker/)の説明に沿って、インストールします。  

### AWS SAM CLI のインストール

[公式ページ](https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/install-sam-cli.html)の説明に沿って、インストールします。  
AWS SAM CLIとは、Serverless Application Model の略称でAWS Lambdaのローカル実行環境を提供するツールです。  

---

前提として、`AWS CLI`がインストールされている必要があります。  
`AWS CLI`のインストール方法は、[公式ページ](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/install-cliv2.html)を参照してください。  

### ローカルでの実行

以下のコマンドで、ローカルで実行できます。  

```shell
sam build --use-container
sam local start-api
```

リクエストの送信をコマンドで同時に行う場合は、以下のコマンドを実行します。  

```shell
sam local invoke
```

### デプロイ

以下のコマンドで、デプロイできます。  

```shell
sam build --use-container
sam deploy --guided
```

### 削除

以下のコマンドで、AWS SAMで構築したリソースを削除できます。  

```shell
sam delete
```
