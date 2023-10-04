export default {
    TWILIO_ACCOUNT_SID: "",
    TWILIO_AUTH_TOKEN: "",

    /** 공격 대상의 전화번호 (E.164 형식) */
    victimNumber: "",

    /** 공격에 사용할 twilio 전화번호 (E.164 형식, 1개 이상) */
    attackNumbers: [],

    /** 전화를 걸 간격 (초 단위) */
    attackDelay: 5,
};
