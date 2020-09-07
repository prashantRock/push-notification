1> Have Node.js installed in your system.

2> In CMD, run the command npm install http-server -g

3> Navigate to the specific path of your file folder in CMD and run the command http-server

4> Go to your browser and type localhost:8080. Your Application should run there.

Postman curl

curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
--header 'TTL: 60' \
--header 'Content-Type: application/json' \
--header 'Authorization: key=AAAAUgp0H6w:APA91bEjVKh857hK6uVBEeHocC94sX-cNMtkkz8H2cpPOO7eTSuBLoBwu-GVVHwlwG5yVNLJOsWB25ZF-7ZbpvE58cEr8m9k9kWs4JE3z3F8IQ9H7UnOkudgVmJj_nVR0KP6FJbyz4rX' \
--data-raw '{ 
"to":"c09s-uKVO0lAiM0vqvaif9:APA91bG92ghifdj1W-ZuLAs2KA-N0KZeBk_bvtVC6T4yEkLxMUkKE0UaN9E9EQxR3G54pAk_RokiKXxbnADpXCzvoCDCC8gvRtyYmNmZrK7djjVATh9va-MoPnmEVBVoY8xGhzAdiInO", 
 "notification" : {
 "body" : "Hello Prashant!!",
 "title" : "Sage",
 "click_action":"Elementary School",
 "Title":"hello"
 }
}'
