var sys = require('sys'),
    Script = process.binding('evals').Script,
    sandbox = {
      animal: 'cat',
      count: 2
    };

function run()
{
 Script.runInNewContext(
  'count += 1; function z(){ name = "kitty"} z();', sandbox, 'myfile.js');
 console.log(sys.inspect(sandbox));
}

run();