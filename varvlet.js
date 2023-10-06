var funcs = [];
// let's create 3 functions
for (var i = 1; i < 4; i++) {
  // and store them in funcs
  funcs[i] = function(i) {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 1; j < 4; j++) {
  // and now let's run each one to see
  funcs[j](j);
}