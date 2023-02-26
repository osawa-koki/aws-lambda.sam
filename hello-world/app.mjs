/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const HelloGet = async (event, context) => {
  try {
    return {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'Hello Get',
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const HelloPost = async (event, context) => {
  try {
    return {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'Hello Post',
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const HelloPut = async (event, context) => {
  try {
    return {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'Hello Put',
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const HelloDelete = async (event, context) => {
  try {
    return {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'Hello Delete',
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}
