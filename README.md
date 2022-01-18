# TinyUrl

#curl for getting url

curl --location --request POST 'http://127.0.0.1:2223/create/tinyurl' \
--header 'Content-Type: application/json' \
--data-raw '{
"url":"http://www.google.com/"
}'
#response

{
"tinyurl": "http://127.0.0.1:2223/5t7P0AT"
}
