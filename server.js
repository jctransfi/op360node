var http = require('http');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'dcoeng1-paev-1.tnc.virtela.cc',
  path: '/stats/search/findByVhidAndDescrAndEnddtBetween?descr=Serial0%2F0%2F0&endt=2015-01-01+12:00:00&stdt=2015-01-01+00:00:00&vhid=CABRCV1-CROCS-RTR-1',
  port: 8090,
  method: 'GET'

};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();