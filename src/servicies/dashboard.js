//https://lahaus.imgix.net/static/plus/investors/data/data.csv

const fetchCustomers = () => {
    return fetch('./data/customer_list.csv').then(function (response) {        
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');

        return reader.read().then(function (result) {
            console.log('result', result)
            return decoder.decode(result.value);
        });
    });
}

const fetchConcierges = () => {
    return fetch('./data/concierges.csv').then(function (response) {        
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');

        return reader.read().then(function (result) {
            console.log('result', result)
            return decoder.decode(result.value);
        });
    });
}

const fetchValuations = () => {
    return fetch('./data/valuation_consolidated.csv').then(function (response) {        
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');

        return reader.read().then(function (result) {
            console.log('result', result)
            return decoder.decode(result.value);
        });
    });
}

const findUser = (email='', data=[]) => {
    return data.find((field) => {
        return field.email === email;
    })
}


const findConcierge = (location='', data=[]) => {
    return data.find((field) => {
        return field.location === location;
    })
}

const findValuation = (city='', data=[]) => {
    return data.filter((field) => {
        return field.city === city;
    })
}

const service = {
    fetchCustomers,
    findUser,
    fetchConcierges,
    findConcierge,
    fetchValuations,
    findValuation
}

export default service;