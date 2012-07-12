console.log( "running" );
//
var se = document.createElement( 'script' );

// Since chrome's content-scripts can't see js objects on the main
// page.. inject our user id adder script.
var script = "\
var usrs = document.createElement('a');\
usrs.innerHTML='User id: ' + Lobsters.curUser;\
document.getElementsByClassName( 'headerlinks' )[1].appendChild( usrs );\
";

se.innerHTML = script;

document.getElementsByTagName('head')[0].appendChild( se );
