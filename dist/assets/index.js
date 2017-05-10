(function () {

  callUnsplash(parsePhotos);

  function callUnsplash(cb) {
    var http = new XMLHttpRequest();
    var auth = 'b40038f47bec7733d8a7725c1d8edd0d8d92d0ba86a85aa802f9113e91b71de0';
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.response));
      }
    };
    http.open('GET', 'https://api.unsplash.com/users/ihor_malytskyi/photos/?client_id=' + auth)
    http.send();

  }

  function parsePhotos(data) {
    var wrapper = document.getElementById('images');
    for (var i = 0; i <= data.length; i++) {
      if (data[i] && data[i].urls) {
        var img = document.createElement('img');
        img.setAttribute('src', data[i].urls.regular);
        wrapper.appendChild(img);
      }
    }
  }
})();
