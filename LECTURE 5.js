// ЗАДАНИЕ 1

function log (amg){
    console.log (amg);
}
function debounce (resolve){
    var timer
        return function (val){
            if (timer){
                clearTimeout(timer);
            }
            timer = setTimeout (function () {
                resolve (val);
            }, 3000);
         }
}
var debounce = debounce(log);
debounce(1);debounce(2);
debounce(3);debounce(4);
debounce(5);debounce(6);
debounce(7);debounce(8);
debounce(9);debounce(10);

// ЗАДАНИЕ 2

function pr (){
    return Promise.resolve ('2')
}
function tr () {
    return Promise.resolve ('3')
}
var promise =  new Promise (function(resolve){
    setTimeout (function () {
        resolve ('1');
    }, 1000);
});
promise
.then ( function (vr) {
    console.log (vr);

    return pr ();
})
.then ( function (vr) {
    console.log (vr);

    return tr ();
})
.then (function (vr){
    console.log (vr)
})
.catch (function (vr){
    console.log (vr)
})


// ЗАДАНИЕ 3

function XML(url,method,body){
    return new Promise(function(resolve,reject){
         var xhr=new XMLHttpRequest();
         xhr.open(method,url,true);
         xhr.onreadystatechange =function(){
             if(xhr.status != 200){
                 resolve(xhr.responseText);
             } else {
                 reject(xhr.status + ':' + xhr.statusText);
                 }
         };
         xhr.onerror = function(){
         reject(xhr.statusText);
         };
         xhr.send(body);
     });
  }

  // ЗАДАНИЕ 4

  function request(url) {
    return new Promise((res) => {
        const delayTime = Math.floor(Math.random() * 10000) + 1;
        setTimeout(() => res(url), delayTime);
    });
}
function returnUrl (url){
    var promisesmassiv = url.map(function (url){
        return request (url);
    });

    var array = [];
    
    return new Promise (function (resolve, reject){
        for (var i = 0; i <= massiv.length; i++){
            
            promisesmassiv [i]

            .then (function (result){
                array.push (result);
                if (array.length === promisesmassiv.length) 
                resolve (promisesmassiv);
            })
            .catch (function (err){
                reject (err);
            });
        }
    }) 
}