function useless(callback) { 
    // few lines of code...
     return callback(); 
}
 
function myCallback(){
      console.log('Thats the way love goes ..');
}
 
useless(myCallback);