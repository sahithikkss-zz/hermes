var axios = require('axios');

module.exports = { 

    fetchQuestions: function (query) {
        //query = "india culture";
        var questions = [{"question":"Is Australia in Australia?","answerString":"Canberra is the capital city of Australia. It has a population of 367,752, and is located on a latitue of -35.28 and longitude of 149.13. It has a population of 367,752, and is located on a latitue of -35.28 and longitude of 149.13. Canberra is also the political center of Australia, which is considered a Constitutional Monarchy, and home to its Ceremonial head of state.","hyperLinkUrl":"http://www.worldatlas.com/oc/au/where-is-australia.html","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"Is Australia a part of Australia?","answerString":"Australia is not part of the United Kingdom. Historically, Australia was settled as a series of six colonies by the British Empire in the late 18th century. These colonies formed a federation on Jan. 1, 1901, and the Commonwealth nation of Australia was born.","hyperLinkUrl":"https://www.reference.com/geography/australia-part-u-k-10408be170f4d12f","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What does \"australia\" mean in Australia?","answerString":"??? Australia. What does Australia mean? Australia as a girls' name is of Latin origin, and the meaning of Australia is \"southern place\".","hyperLinkUrl":"http://www.thinkbabynames.com/meaning/0/Australia","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"Is Australia real?","answerString":"Australia Is Not Real is a copypasta which says the country of Australia does not exist and was invented as a way to make people believe Britain sent its convicts somewhere when in actuality they just killed them. The copypasta is usually posted on Reddit and 4chan threads whenever Australia is mentioned.","hyperLinkUrl":"https://knowyourmeme.com/memes/australia-is-not-real","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What to do Australia?","answerString":"101 of the Most Incredible Things You Can See and Do in Australia 1 Drive the Great Ocean Road. 2 Explore the graffiti alleys of Melbourne. 3 Have a BBQ on Ninety Mile Beach. 4 Shop at the Queen Victoria Market. 5 Check out the Shrine of Remembrance. 6 ... (more items) ","hyperLinkUrl":"https://www.gapyear.com/articles/travel-ideas/101-of-the-best-things-to-do-in-australia","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What is Australia for?","answerString":"Australia is world famous for its natural wonders and wide open spaces, its beaches, deserts, \"the bush\", and \"the Outback\". Australia is one of the world's most highly urbanised countries; it is well known for the attractions of its large cities such as Sydney, Melbourne, Brisbane, and Perth.","hyperLinkUrl":"https://wikitravel.org/en/Australia","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What is Australia's area?","answerString":"Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area.","hyperLinkUrl":"https://en.wikipedia.org/wiki/Australia","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What to do in Australia?","answerString":"25 Best Things To Do In Melbourne (Australia) 1 Drink the world???s best coffee. 2 Check out the amazing street art. 3 Wander through laneways. 4 Visit Flinders Street Station and Federation Square. 5 Rock out. 6 ... (more items) ","hyperLinkUrl":"https://www.thecrazytourist.com/25-best-things-melbourne-australia/","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What to do in Australia?","answerString":"25 Best Things To Do In Melbourne (Australia) 1 Drink the world???s best coffee. 2 Check out the amazing street art. 3 Wander through laneways. 4 Visit Flinders Street Station and Federation Square. 5 Rock out. 6 ... (more items) ","hyperLinkUrl":"https://www.thecrazytourist.com/25-best-things-melbourne-australia/","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What is Australia also called?","answerString":"Australia is both a country and a continent. The country called Australia is a part of the continent that is also called Australia. Australia is also a part of the region called Oceania, which is not technically a continent. It is also a part of the region called Australasia, which is a sub-region of Oceania.","hyperLinkUrl":"https://countrydigest.org/is-australia-a-country-or-a-continent/","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What is Australia also called?","answerString":"Australia is both a country and a continent. The country called Australia is a part of the continent that is also called Australia. Australia is also a part of the region called Oceania, which is not technically a continent. It is also a part of the region called Australasia, which is a sub-region of Oceania.","hyperLinkUrl":"https://countrydigest.org/is-australia-a-country-or-a-continent/","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What does \"australians\" mean in Australia?","answerString":"??? Australia. What does Australia mean? Australia as a girls' name is of Latin origin, and the meaning of Australia is \"southern place\".","hyperLinkUrl":"http://www.thinkbabynames.com/meaning/0/Australia","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What is Australia called?","answerString":"Australia is both a country and a continent. The country called Australia is a part of the continent that is also called Australia. Australia is also a part of the region called Oceania, which is not technically a continent. It is also a part of the region called Australasia, which is a sub-region of Oceania.","hyperLinkUrl":"https://countrydigest.org/is-australia-a-country-or-a-continent/","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What are Australia's resources?","answerString":"Australia has many natural resources. These resources include mineral resources, such as copper, gold and diamonds, energy resources, such as coal, oil, and uranium, and land resources that are used for farming and logging.","hyperLinkUrl":"http://www.skwirk.com/p-c_s-16_u-307_t-752_c-2823/natural-resources/nsw/natural-resources/australia-s-physical-environment/physical-characteristics-of-australia","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What does \"australian\" mean in Australia?","answerString":"??? Australia. What does Australia mean? Australia as a girls' name is of Latin origin, and the meaning of Australia is \"southern place\".","hyperLinkUrl":"http://www.thinkbabynames.com/meaning/0/Australia","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"Is Australia and Australasia the same?","answerString":"Australia is a continent, but is sometimes part of 'Oceania' which is more of a region and includes NZ and the Pacific islands. 'Australasia' tends to refer to NZ, New Guinea and nearby islands. I think 'Australasia' is a more useful term myself, as I consider the Pacific it's own 'continent' or rather region.","hyperLinkUrl":"http://www.city-data.com/forum/australia-new-zealand/1174336-australia-its-own-continent-not.html","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"What is Australia located?","answerString":"Australia is an island nation that is located in the southern part of the Pacific Ocean. Using Asia's eastern coast as an orientation, Australia is located to the southeast of the mainland Asian continent and to the southwest of North America.","hyperLinkUrl":"https://www.reference.com/geography/australia-located-7ad51de2ea798eb3","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"Which part of Australia do most Australians live in?","answerString":"Most Australians live in settlements that are far more crowded than the nation???s population density suggests. About 85 percent of Australia???s population lives in cities or towns. The percentage of people who live in cities of more than 50,000 people is 77 percent, the highest on earth.","hyperLinkUrl":"https://zippyfacts.com/which-part-of-australia-do-most-australians-live-in/","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"Which part of Australia do most Australians live in?","answerString":"Most Australians live in settlements that are far more crowded than the nation???s population density suggests. About 85 percent of Australia???s population lives in cities or towns. The percentage of people who live in cities of more than 50,000 people is 77 percent, the highest on earth.","hyperLinkUrl":"https://zippyfacts.com/which-part-of-australia-do-most-australians-live-in/","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"},{"question":"Is Australia also a country?","answerString":"Australia is the one and only country on the Australian continent. However, the area was originally called Australasia. Australasia included the country of New Zealand and Papua New Guinea. Australia is its own country, but it is also a continent at the same time.","hyperLinkUrl":"https://www.reference.com/geography/many-countries-australia-b4501b4e40f434cf","imageSource":"https://www.bing.com/th?id=OIP.M93c8t3cvF3HUzHEoxD-XgEcDb"}];
        if(!!query) {
            return this.fetchWithQuery('http://lokeshc32', 'api/values', query);
        } else {
            return Promise.reject();
        }
        //return questions;
    },

    fetchIntents: function (query) {
        //query = "india culture";
        var json = {
            Query: "australia",
            TotalItems: 6,
            item: [
                {
                    Text: "History",
                    thumbnailUrl: "https://tse1.mm.bing.net/th?id=OIP.Cyv-7uY4muDDBLGkOkXgYAHaEK&pid=Api",
                    encodingFormat: "jpeg"
                },
                {
                    Text: "Geography",
                    Image: "https://tse2.mm.bing.net/th?id=OIP.FYTHR3GQW9PrAFXQA-hHvgHaFY&pid=Api",
                    encodingFormat: "jpeg"
                },
                {
                    Text: "Government and politics",
                    Image: "https://tse2.mm.bing.net/th?id=OIP.Ja1FBcXqj0K7TtcnFgiJGQAAAA&pid=Api",
                    encodingFormat: "jpeg"
                },
                {
                    Text: "Economy",
                    Image: "https://tse1.mm.bing.net/th?id=OIP.HSNj_ddgfZKETHLy_5r_sgHaE9&pid=Api",
                    encodingFormat: "jpeg"
                },
                {
                    Text: "Demographics",
                    Image: "https://tse4.mm.bing.net/th?id=OIP.cmsFdGwYY1U-J_M8z_pkSwHaEK&pid=Api",
                    encodingFormat: "jpeg"
                },
                {
                    Text: "Culture",
                    Image: "https://tse4.mm.bing.net/th?id=OIP._x9cLMvyxn64gl6UdMh3vAHaE5&pid=Api",
                    encodingFormat: "jpeg"
                }
            ]
        }
        //return json;

        if(!!query) {
            return this.fetchWithQuery('http://172.22.55.24:5000', 'intent', query);
        } else {
            return Promise.reject();
        }      
    },
    
    fetchWithQuery(endpoint, route, query) {        
        if(!!query) {
            var encodedURI = window.encodeURI(endpoint +'/' + route + '/' + query);
            return fetch(encodedURI, {method: 'GET'})
                .catch(error => {               
                    return {};
                  })
                .then(response => {
                    if(response.ok) {
                        return response.json().then(data =>  {
                            console.log(data);
                            return data;
                        }).catch( err=> {
                                console.log(err);
                                return Promise.reject();
                            }
                        );
                    } else {
                        return Promise.reject();
                    }
                }
                );
        }
    }
};
