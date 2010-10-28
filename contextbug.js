var  sandbox = { setTimeout: setTimeout, console:console};
var myscript=0;
function run_scripts_in_same_context(text)
{
 process.binding('evals').Script.runInNewContext(text,sandbox,'myfile'+(myscript++)+'.js');
}

run_scripts_in_same_context('var x="1"; function showx(){console.log("x="+x);} setTimeout(function(){showx();},100)');
run_scripts_in_same_context('x="5"; showx();');
console.log("the last x should be 5, if it is 1 so the contexts are not referenced");
