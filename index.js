const { Assets } = require('@pixi/node')

exports.handler = async (event, context) => {
  Assets.init()

  const response = {
    foo: 'Hello, world',
    bar: 'Goodbye, world',
    event: event,
    context: context,

    // Amazon API Gateway を利用して Lambda 関数を WebAPI 化するときは
    // 必要に応じて isBase64Encoded, statusCode, headers, body をセットする。
    // 今回は不要だがサンプル的にセットしておく。
    statusCode: 200, // HTTP 200 OK
    headers: {
      'x-custom-header': 'my custom header value',
    },
    body: JSON.stringify({
      foo: 'Hello, world',
      bar: 'Goodbye, world',
    }),
  }

  return response
}
