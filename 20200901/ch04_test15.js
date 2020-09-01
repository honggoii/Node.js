var winston = require('winston'); //로그 처리 모듈
var winstonDaily = require('winston-daily-rotate-file'); //로그 일별 처리 모듈
var moment = require('moment'); //시간 처리 모듈

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
};

var logger = winston.createLogger({
    level: 'debug',
    format: winston.format.simple(),
    tansports: [
        new (winston.transports.Console)({
            colorize: true
        }),
        new (winstonDaily)({
            filename: './log/server_%DATE%.log',
            maxsize: '10m',
            datePattern: 'YYYY-MM-DD'
        })
    ]
});