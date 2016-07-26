angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name:"a shirt with short sleeves",
    color:"balanced",
    lastText: 'M',
    face: 'img/1.jpg',
    price:"$20",
  }, {
    id: 1,
    name:"a shirt with short sleeves",
    color:"positive",
    lastText: 'M',
    face: 'img/2.jpg',
    price:"$10",
  }, {
    id: 2,
    name:"a shirt with short sleeves",
    color:"calm",
    lastText: 'M',
    face: 'img/3.jpg',
    price:"$10",
  }, {
    id: 3,
    name:"a shirt with short sleeves",
    color:"energized",
    lastText: 'M',
    face: 'img/4.jpg',
    price:"$10",
  }, {
    id: 4,
    name:"a shirt with short sleeves",
    color:"assertive",
    lastText: 'M',
    face: 'img/5.jpg',
    price:"$10",
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Dash', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dashes = [{
    id: 0,
    name:"Shirt",
    title:"a shirt with short sleeves",
    price:"$81",
    img: "./img/1.jpg",
    img1: "./img/1.1.jpg",
    img2: "./img/1.2.jpg",
  }, {
    id: 1,
    name:"Shirt 1",
    title:"a shirt with Lotus leaf sleeves",
    price:"$5",
    img:"./img/2.jpg",
    img1: "./img/1.1.jpg",
    img2: "./img/1.2.jpg",
  }, {
    id: 2,
    name:"Shirt2",
    title:"a shirt with Lotus leaf sleeves",
    price:"$10",
    img:"./img/3.jpg",
    img1: "./img/1.1.jpg",
    img2: "./img/1.2.jpg",
  }, {
    id: 3,
    name:"T恤3",
    title:"a shirt with Lotus leaf sleeves",
    price:"8$",
    img:"./img/4.jpg",
    img1: "./img/1.1.jpg",
    img2: "./img/1.2.jpg",
  }, {
    id: 4,
    name:"T恤4",
    title:"a shirt with Lotus leaf sleeves",
    price:"$6",
    img:"./img/5.jpg",
    img1: "./img/1.1.jpg",
    img2: "./img/1.2.jpg",
  }, {
    id: 5,
    name:"T恤5",
    title:"a shirt with Lotus leaf sleeves",
    price:"$18",
    img:"./img/6.jpg",
    img1: "./img/1.1.jpg",
    img2: "./img/1.2.jpg",
  }];

  return {
    all: function() {
      return dashes;
    },
    remove: function(dash) {
      dashes.splice(dashes.indexOf(dash), 1);
    },
    get: function(dashId) {
      for (var i = 0; i < dashes.length; i++) {
        if (dashes[i].id === parseInt(dashId)) {
          return dashes[i];
        }
      }
      return null;
    }
  };
})


