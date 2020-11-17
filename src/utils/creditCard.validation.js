import { startsWith, inRange } from 'lodash';
import moment from 'moment';

const validateCardNumber = (type, number) => {
    switch (type) {
        case 1: {
            if (!inRange(number.toString().length, 13,17)) return false;
            if (!startsWith(number, 4)) return false;
            break; 
        }
        case 2: {
            if (!inRange(number.length, 16, 20)) return false;
            const validValues = [51, 52, 53, 54, 55];
            if (validValues.indexOf(number.toString().substring(0, 2)) == -1) return false;
            break;
        }
        case 3: {
            if (!inRange(number.length, 15, 16)) return false;
            const validValues = [34,37];
            if (validValues.indexOf(number.toString().substring(0, 2)) == -1) return false;
            break;
        }
    }
    return true;
};

const validateExpirationDate = (date)=>{
    const today = moment();
    const currentDate = moment(date, "MM-YYYY");
    if(currentDate.isValid()){
        if(currentDate.isAfter(today, 'month')) return true;
        if(currentDate.isAfter(today, 'year')) return true;
    }
    return false;
} 

export {validateCardNumber, validateExpirationDate};
