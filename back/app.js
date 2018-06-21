var request = require("request");
var express = require('express');
var app = express();

app.get('/quintoandar', function (req, res) {
  
    request({
        method: 'POST',
        url : 'https://aws-challenge.quintoandar.com.br/contact/',
        body : {
            company: "IBM",
            contactOptIn: true,
            email: "lucas@ulcas.com",
            name: "Lucas Costa Oliveira",
            phone : "+55 11 97182-0513"
        },
        json: true
    }, function(err, response, body) {
        // console.log(err);
        // console.log(res);
        res.send(body);
    });


});

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});
