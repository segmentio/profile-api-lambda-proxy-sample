# Goal
We proxy Segment Profile API requests to protect customer data from being exposed in client-side browser environments. This repo is only provided as a sample implementation of Segment Profile API proxy on AWS Lambda. As you can see, it does not include error handling and other aspects required to make it production worthy. 

We deploy it using the popular [serverless framework](https://www.serverless.com/) so this can be ported easily to other serverless providers. 

# Quick Start

1. Install serverless via `npm install -g serverless`. More details [here](https://www.serverless.com/framework/docs/providers/aws/guide/quick-start/).
2. Configure AWS credentials as listed [here](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/).
3. Inject your Segment Personas production credentials into `src\prod.env.json` in the format:
```
{
  "PROFILE_API_TOKEN": "<TOKEN>",
  "SPACE_ID": "<SPACE_ID>"
}
```
4. Run `npm install`
5. Run `serverless deploy --stage prod`

If you are curious about how to build a more robust development workflow, please see this [guide](https://www.serverless.com/framework/docs/providers/aws/guide/workflow/). 
