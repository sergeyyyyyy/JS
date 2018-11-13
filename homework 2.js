var toolProv = (function (){
    return{
    isUndefined:  function(a) {
             return a === undefined;
        },
        isNull: function(a){
          return  a === null;
        },
        isNan: function(a){
            return isNaN(); 
        },
        isEmpty: function(object){
             return Object.keys(object).length === 0;            
        },
        isMap (obj,func){
            var Res =[];
            for (var key in obj){
                Res [key] = func(obj [key]);
            }
            return mapRes;
        },
        ranDomio: function(min, max){
            return Math.floor (Math.random() * (max - min + 1)) + min;
        },
        filtObj (obj,func){
            var res = {};
            for (var key in obj){
                res [key] = obj[key];
            }
              return res;
          },
          compareObj (firstObj, secondObj) {

            if(Object.keys(firstObj).length !== Object.keys(secondObj).length) {

                return false;

            } else {

                if(this.isEmptyObj(firstObj) && this.isEmptyObj(secondObj)) {

                    return true;

                } else {

                    var result;

                    for(var key in firstObj) {

                        if(typeof(firstObj[key]) == 'object') {

                            result = this.compareObj(firstObj[key], secondObj[key]);

                        } else {

                            result = (firstObj[key] === secondObj[key]);

                        }

                        if(!result) {

                            return false;

                        }

                    }

                    return result;

                }

            }

        }
    }

})();
