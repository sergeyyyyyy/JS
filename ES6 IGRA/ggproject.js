class Project{ 
  constructor(idProject,title,cost,kolStrok){
        this.idProject=idProject;
        this.title=title;
        this.cost=cost;
        this.kolStrok=kolStrok;
        this.status=true;
    }

    getIdProject(){
        return this.idProject;
    }

    getTitle(){
        return this.title;
    }

    getCost(){
        return this.cost;
    }

    getKolStrok(){
        return this.kolStrok;
    }

    getStatus(){
        if(this.status) {
            return true;
        }else{
            return false;
        }
    }

    setStatus(tr){
        this.status=tr;
    }
}
