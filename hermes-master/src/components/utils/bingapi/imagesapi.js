var axios = require('axios');

module.exports = {
  fetchIntents: function (query) {    
    var encodedURI = window.encodeURI('http://praserver/QuestionsIndex?Query=' + query + '');
    //http://praserver/QuestionsIndex?Query=australia+history
    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.item;
      });
  }
};
