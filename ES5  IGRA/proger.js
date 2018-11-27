var Proger=(function(){

    function Proger(idProger,name,lastName,level){
        this.idProger=idProger;
        this.name=name;
        this.lastName=lastName;
        this.level=level;
        this.status=true;

        this.kolStrok=0;
        this.costStrokLevel=0;
    }

    Proger.prototype.getLevel=function(){
        return this.level;
    }
  
    Proger.prototype.getLastName=function(){
        return this.lastName;
    }

    Proger.prototype.getName=function(){
        return this.name;
    }

    Proger.prototype.getIdProger=function(){
        return this.idProger;
    }

   
    
    
    Proger.prototype.kolStrokCode=function(){
        if(this.level==="junior") {
            this.kolStrok=100;
            this.costStrokLevel=150;
        }else{
            if(this.level==="midle"){
                this.kolStrok=250;
                this.costStrokLevel=300;
            }else{
                this.kolStrok=300;
                this.costStrokLevel=500;
            }
        }
    }

    Proger.prototype.getKolStrok=function(){
        return this.kolStrok;
    }

    
    Proger.prototype.getCostStrokLevel=function(){
        return this.costStrokLevel;
    }

    Proger.prototype.getStatus=function(){
        if(this.status) {
            return true;
        }else{
            return false;
        }
    }

    Proger.prototype.setStatus=function(bool){
        this.status=bool;
    }


    return Proger;
})()