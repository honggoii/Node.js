var express = require('express'), http = require('http');

var app = express();//익스프레스 객체

app.set('port', process.env.PORT || 3000); //process.env객체에 PORT속성이 있으면 그 속성, 없으면 3000번 포트 사용

//express 서버 시작
http.createServer(app),listen(app.get('port'), function() {
    console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'));
});