class Project{ 
 constructor(idProject,title,cost,kolvoStrok,status){
        this.idProject=idProject;
        this.title=title;
        this.cost=cost;
        this.kolvoStrok=kolvoStrok;
        this.status=true;
    }
    getStatus(){
        if(this.status){
            return true;
        } else {
            return false;
        }
    }
    getTitle(){
        return this.title;
    }
    getIdProject(){
        return this.idProject;
    }
    getKolStrok(){
        return this.kolvoStrok;
    }
    getCost(){
        return this.cost;
    }
    setStatus(bool){
        this.status=bool;
    }
}
