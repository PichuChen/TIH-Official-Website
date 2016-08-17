'use strict';

var
    port = 3000, // 記得先設定常用 port 
    path = require('path'),
    express = require('express'),
    ngrok = require('ngrok'),
    webpack = require('webpack'),
    config = require('./webpack.config.dev.js'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    app = express(),
    compiler = webpack(config),
    ngrokConfig = {
      proto: 'http',
      addr: port ,
    },
    webpackDevConfig = webpackDevMiddleware( compiler, {
      // noInfo: true,
      quiet: true,
      publicPath: config.output.publicPath,
      stats: {
        colors: true
     }
    });

// webpackDevConfig.waitUntilValid(function(){
//   console.log('Package is in a valid state');
// });

app.use( webpackDevConfig );

app.use(require('webpack-hot-middleware')(compiler));
app.use('/public', express.static('public'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

process.on('uncaughtException', function( evt ) {
  if(evt.code === 'EADDRINUSE') {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    console.log('\x1b[33m', '[WARNING] Port ' + evt.port + ' is already in use!', '\x1b[0m' );
  }else{
    process.stdout.write('\u001B[2J\u001B[0;0f');
    console.log( '\x1b[32m', 'UncaughtException Message: ' , evt.code ,'\x1b[0m' );
  }
})



app.listen( port , function(err) {
  // if (err) throw err;
  process.stdout.write('\u001B[2J\u001B[0;0f');
  console.log('\x1b[32m','[Success]','\x1b[0m','Dev Server: Listening  ==>','\x1b[36m',port,'\x1b[0m','Port');
  ngrok.connect( ngrokConfig,  function ( $err , $url ) {
    if ( !$err ) console.log('\x1b[32m','[Success]','\x1b[0m','Ngrok Server: Demo URL Available  ==>','\x1b[36m', $url ,'\x1b[0m');
    if (  $err ) {
      console.log( 'error_code:' , $err.error_code )
      console.log( $err.details.err );
      ngrok.kill();
    }
  });
});
