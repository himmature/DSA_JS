const concatinatedKeysObject = (obj, finalObj={}, prop='user') => {
    Object.keys(obj).forEach(key => {
        if(key && typeof obj[key] !== 'object') {
            finalObj[`${prop}_${key}`] = obj[key]
        } else {
            prop = `${prop}_${key}`
            concatinatedKeysObject(obj[key], finalObj, prop);
            prop = 'user';
        }
    })
    return finalObj;
}

const obj = {
    firstName: 'arthur',
    lastName: 'morgan',
    address: {
        city: 'texas',
        country: 'US'
    },
    contact: {
        email: 'amorgan@example.com',
        mobile: {
            primary: '7503838383',
            secondary: '3232323232'
        }
    }
}

// const result = {
//     user_firstName: 'arthur',
//     user_lastName: 'morgan',
//     user_address_city: 'texas',
//     user_address_country: 'US',
//     user_contact_email: 'amorgan@example.com',
//     user_contact_mobile_primary: '7503838383',
//     user_contact_mobile_secondary: '3232323232',
// }

const result = concatinatedKeysObject(obj);
console.log(result);