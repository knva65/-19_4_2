class ValidatorStatic {
    constructor() {

    }
   static isEmail(str) {
       return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    static isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1) || (str.indexOf('.ru') !== -1) || (str.indexOf('.su') !== -1))
    }
    static isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    static isPhone(str) {
        let phone = str.match(/\+7\ \([0-9]{3}\)\ [0-9]{3}-[0-9]{2}-[0-9]{2}/);
        return phone === null ? false : true;
    }

}

console.log(ValidatorStatic.isEmail('test@mail.ru'));
console.log(ValidatorStatic.isDomain('test.net'));
console.log(ValidatorStatic.isDate('09.12.2021'));
console.log(ValidatorStatic.isPhone('+7 (096) 231-40-14'));
