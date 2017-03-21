/* Yolo */
var clarifai;

$(document).ready(function() {
  clarifai = new Clarifai({
    'clientId': 'KzLHU5r8Ug3BJzBewT8wxK5TKsdiII9z6RBRcMrH',
    'clientSecret': 'agXNlye7aTAkKtaZyo48ubUZ6Kd3JGBrgu0j685j'
  });
});

function positive(imgurl) {
  clarifai.positive(imgurl, 'ferrari', callback).then(
    promiseResolved,
    promiseRejected
  );
}

function negative(imgurl) {
  clarifai.negative(imgurl, 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
}

function train() {
  clarifai.train('apple', callback).then(
    promiseResolved,
    promiseRejected
  );
}

function predict(imgurl) {
  clarifai.predict(imgurl, 'apple', callback)
  .then(function(obj) {
      if (obj.score < 0.6) {
        swal({
          title: 'WHAT!',
          text: 'Aww That is not the RIGHT One.',
          imageUrl: obj.url
        });
      } else {
        swal({
          title: 'Sweet!',
          text: 'This One is Correct.',
          imageUrl: obj.url
        });
      }
    },
    promiseRejected
  );
}

function promiseResolved(obj){
  console.log('Promise resolved', obj);
}

function promiseRejected(obj){
  console.log('Promise rejected', obj);
}

function callback(obj){
  console.log('callback', obj);
}

function carSubmit() {
  predict($("#new-car").val());
}

function samplePositives() {
  clarifai.positive('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://bluecure.org/wp-content/uploads/2016/03/apples-prostate-cancer-curing-foods.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://www.guidetogreatergainesville.com/wp-content/uploads/2016/03/Apple.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('https://images7.alphacoders.com/407/407415.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('https://static.pexels.com/photos/39803/pexels-photo-39803.jpeg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://bestapples.com/wp-content/uploads/2015/10/apple-varieties.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('https://static.pexels.com/photos/8208/pexels-photo.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('https://img.clipartfest.com/e4a7ccbd63ec9bdc8bf1b5bfac19dc04_red-apple-clipart-free-apple-clip-art_1920-1509.jpeg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://amazting.com/wp-content/uploads/2014/03/apples1.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.positive('http://www.hd-wallpapersdownload.com/script/bulk-upload/fruits-pictures-red-apple.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
}

function sampleNegatives() {
  clarifai.negative('http://i.imgur.com/GeMQsiQ.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/eXCE9mf.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/M0QBOo9.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/xzPD0zs.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/wjSZq5L.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/MMapLsi.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/eXCRRzl.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/Q1kSJx9.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/q2Ccwmq.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
  clarifai.negative('http://i.imgur.com/EnrVc0B.jpg', 'apple', callback).then(
    promiseResolved,
    promiseRejected
  );
}
