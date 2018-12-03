class Proger{

    constructor(idProger,name,lastName,level){
        this.idProger=idProger;
        this.name=name;
        this.lastName=lastName;
        this.level=level;
        this.status=true;

        this.kolStrok=0;
        this.costStrokLevel=0;
    }

    getLevel(){
        return this.level;
    }
  
    getLastName(){
        return this.lastName;
    }

    getName(){
        return this.name;
    }

    getIdProger(){
        return this.idProger;
    }

   
    
    
    kolStrokCode(){
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

    getKolStrok(){
        return this.kolStrok;
    }

    
    getCostStrokLevel(){
        return this.costStrokLevel;
    }

    getStatus(){
        if(this.status) {
            return true;
        }else{
            return false;
        }
    }

    setStatus(bool){
        this.status=bool;
    }
}