class Proger{

    constructor(idProger,name,lastName,level){
        this.name=name;
        this.status=0;
        this.lastName=lastName;
        this.idProger=idProger;
        this.level=level;
        this.kolvoStrok=0; 
        this.costStrokLevel=0;
    }
    getLevel(){
        return this.level;
    }
    getName(){
        return this.name;
    }
   getLastName(){
        return this.lastName;
    }
    getIdProger(){
        return this.idProger;
    }
    kolStrokCode(){
        if(this.level=="junior") {
            this.kolvoStrok=15;
            this.costStrokLevel=18;
        } else {
            if(this.level=="midle"){
                this.kolvoStrok=40;
                this.costStrokLevel=35;
            } else {
                this.kolvoStrok=100;
                this.costStrokLevel=60;
            }
        }
    }
    getKolStrok(){
        return this.kolvoStrok;
    }
    getCostStrokLevel(){
        return this.costStrokLevel;
    }
    getStatus(){
        if(this.status) {
            return 0;
        } else {                                
            return 1;
        }
    }
    setStatus(bool){
        this.status=bool;
    }     
}