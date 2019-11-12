function privateFunction(){
    console.log("Private function called");    
}

function foo(){
    console.log("Foo");
}

function bar(){
    console.log("Barnpm");
}


module.exports = {
    foo:foo,
    bar:bar
}