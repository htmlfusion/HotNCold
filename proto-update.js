#!/usr/bin/env node

var program = require('commander'),
  fs = require('fs'),
  exec = require('child_process').exec,
  yeoman = require('yeoman-environment')
  path = require('path');


program
  .version('0.0.1')
  .option('-i, --input <s>', 'Input to JSON')
  .parse(process.argv);

console.log(program.input);

function NonInteractiveAdapter() {

}

NonInteractiveAdapter.prototype.prompt = function(args, cb) {
  console.log('promted', args);
  console.log('promted', cb);
  var opts = {};
  args.forEach(function(data) {
    if (data.name === 'overwrite') {
      opts[data.name] = data.choices[0].value;
    } else {
      opts[data.name] = data.default;
    }
  });
  console.log(opts);
  cb(opts);
};

NonInteractiveAdapter.prototype.log = yeoman.util.log();

NonInteractiveAdapter.prototype.diff = function(stuff, stuff2) {
  console.log(stuff);
  console.log(stuff2);
}


if (program.input) {
	var dirname = path.dirname(program.input);

  env = yeoman.createEnv('angular-fullstack', {}, new NonInteractiveAdapter());
  env.lookup();
  fs.readFile(program.input, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    var routes = JSON.parse(data);
    env.lookup(function() {
      Object.keys(routes).forEach(function(route) {
        var html = routes[route];
        env.run('angular-fullstack:route -f ' + route, {
          force: true
        }, function(err) {

        	if(err) return console.log(err);

          fs.writeFile('client/app/'+route+'/'+route+'.html', routes[route], function(err) {
            if (err) {
              return console.log(err);
            }
            console.log('HTML updated!');
          });
          fs.createReadStream(dirname+'/'+route+'.jpg').pipe(fs.createWriteStream('client/assets/images/'+route+'.jpg'));

        });

      })
    });
  });
}