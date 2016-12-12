var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var bodyParser = require('body-parser');

var app = express();
var compiler = webpack(config);

var webpackDevOptions = {
  noInfo: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(compiler, webpackDevOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const commentList = [
  { "name": "cam", "content": "It's good idea!", "publishTime": "2015-05-01" },
  { "name": "arcthur", "content": "Not bad.", "publishTime": "2015-05-01" }
];

app.get('/api/response.json', function(req, res) {
  res.send({ 'commentList': commentList });
});

app.post('/api/submit.json', function(req, res) {
  if (req.body.value) {
    commentList.push({
      name: 'arcthur',
      content: decodeURI(req.body.value),
      publishTime: (new Date()).toISOString().split('T')[0],
    });

    res.send({
      "ok": true,
    });
  } else {
    res.send({
      "ok": false,
    });
  }
});

app.listen(8787, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8787');
});
