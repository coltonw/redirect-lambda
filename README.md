# Redirect service for www.willcolton.com

This is a simple redirect service for redirecting www.willcolton.com to whatever subpage I favor at the moment.

## Usage

### Deployment

```
$ npx serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying redirect-lambda to stage dev (us-east-1)

✔ Service deployed to stack redirect-lambda-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  redirect: redirect-lambda-dev-redirect (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "statusCode": 307,
  "Headers": {
    "Location": "https://cra.willcolton.com/"
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
npx serverless invoke local --function redirect
```

Which should result in response similar to the following:

```json
{
  "statusCode": 307,
  "Headers": {
    "Location": "https://cra.willcolton.com/"
  }
}
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
npx serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
npx serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
