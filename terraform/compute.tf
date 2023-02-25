
resource "aws_lambda_function" "my_lambda_function" {
  filename         = "lambda_function_payload.zip"
  function_name    = "${replace(var.project_name, "-", "_")}my_lambda_function"
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  runtime          = "nodejs16.x"
  source_code_hash = filebase64sha256("lambda_function_payload.zip")
}
