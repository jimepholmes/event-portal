const API = {
    newUser(firstName, lastName, email, password, typeID){
        return fetch('https://api-event-platform.playmob.com/user/save', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              typeID: typeID,
              optIn: true
            })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            return data;
        });
    },

    login(email, password){
        return fetch('https://api-event-platform.playmob.com/user/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password
            })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            return data;
        });
    },

    checkSession(sessionGUID){
        return fetch('https://api-event-platform.playmob.com/user/checkSession', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sessionGUID: sessionGUID
            })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            return data;
        });
    },

    isNGO(sessionGUID){
        return fetch('https://api-event-platform.playmob.com/user/isNGO', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sessionGUID: sessionGUID
            })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            return data;
        });
    },

    eventSearch(campaignGUID, name, statusID, lat, lng, distanceMiles, countryCode, startDate, endDate, typeID, capacity, NGOGUID, NGOSearch, userSearch){
        return fetch('https://api-event-platform.playmob.com/event/search', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              campaignGUID: campaignGUID,
              name: name,
              statusID: statusID,
              lat: lat,
              lng: lng,
              distanceMiles: distanceMiles,
              countryCode: countryCode,
              startDate: startDate,
              endDate: endDate,
              typeID: typeID,
              capacity: capacity,
              NGOGUID: NGOGUID,
              NGOSearch: NGOSearch,
              userSearch: userSearch
            })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            return data;
        });
    },

    getEvent(campaignGUID, eventGUID){
        return fetch(`https://api-event-platform.playmob.com/event/detail/${eventGUID}`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              campaignGUID: campaignGUID
            })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            return data;
        });
    },


    /*
    newUser(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {headers: {
                Authorization:`Bearer ${apiKey}`
            }
            }).then(response => {
                return response.json().then(jsonResponse => {
                    if (jsonResponse.businesses){
                        return jsonResponse.businesses.map(business => {
                            //console.log(`returning:${business.id}, `)
                            return {
                                id: business.id,
                                imageSrc: business.image_url,
                                name: business.name,
                                address: business.location.address1,
                                city: business.location.city,
                                state: business.location.state,
                                zipCode: business.location.zip_code,
                                category: business.categories[0].title,
                                rating: business.rating,
                                reviewCount: business.review_count
                            }
                        })
                    }
                });
            });
    }
    */
}

export default API;