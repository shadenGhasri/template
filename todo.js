window.addEventListener("scroll",()=>{
    const header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0)

});


// const fakeRequestCallback = url =>{
//     return new Promise (resolve,reject) =>{
//         const delay = Math.floor(Math.random()*4500)+500;
//         setTimeout()=>{
//             if(delay>4000){
//                 reject()
//             }else{

//             }
//         }
//     }
// }

function serverRequest(query, callback){
    setTimeout(function(){
        // query darkhste ma be samte servere
      var response = query + "full!";
      callback(response);
    },5000);
    // baraye in ke zamani k tool mikeshe ta pasokh az server daryaft beshe ro shabihsazi konim time gozatime baraye settime
    // response pasokhe darkhast ast
}
  function getResults(results){
    console.log("Response from the server: " + results);
  }
  serverRequest("The glass is half ", getResults);


  
// ba T.get darkhastio b tweeter ersal mikonim
// para aval: masire darkhast
// para 2: mavarede morede jostojo
// para 3: funci k amaliyati khas anjam midahad


//   T.get('search/tweets', params, function(err, data, response) {
//     if(!err){
//       // This is where the magic will happen
//     } else {
//       console.log(err);
//     }
//   })




// var promise = new Promise(function(resolve, reject){
//     var str="7learn.com";
//     var site="7learn.com";
//     if(str===site) {
//            resolve();
//     } else {
//         reject();
//     }
// });
// promise.then(function () {
//     console.log('Promise is successfully.');
// }).
// catch(function () {
//     console.log('Some error has occured');
// });