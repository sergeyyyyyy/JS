class Manager{
    constructor(idManager,name,lastName,expirience){
        this.idManager=idManager;
        this.name=name;
        this.lastName=lastName;
        this.expirience=expirience;
        this.status=true;
    }
    getName(){
        return this.name;
    }
    getIdManager(){
        return this.idManager;
    }
    tik(){
        let budgetCompany=document.getElementById("money").innerHTML;
        let ostalosStrok=document.getElementById("kolStrok"+this.id).innerHTML;
        ostalosStrok=ostalosStrok.substring(16,ostalosStrok.length);
        for(let i=0;i<this.proger.length;i++){
            this.proger[i].kolStrokCode(); 
            budgetCompany=Number(budgetCompany)-this.proger[i].getCostStrokLevel();
            document.getElementById("money").innerText=budgetCompany;
            ostalosStrok=Number(ostalosStrok)-Number(this.proger[i].getKolStrok())*Number(this.expirience);
            document.getElementById("kolStrok"+this.getIdManager()).innerText="ОСТАЛОСЬ СТРОК: "+ostalosStrok;
        }
        if(ostalosStrok<=0) {
        document.getElementById("status"+this.idManager).innerText="готово!";
        document.getElementById("kolStrok"+this.getIdManager()).innerText="ОСТАЛОСЬ СТРОК: 0";
        this.status=true;
        document.getElementById("money").innerText=Number(document.getElementById("money").innerHTML)+Number(this.project.getCost());
        }
    }
    getStatus(){
        if(this.status) {
            return true;
        } else {
            return false;
        }
    }
    zveno(project,proger){ 
        this.proger=proger;
        this.status=false; 
        this.project=project;
        this.id=project.getIdProject();
        Manager.addBlock(this.id,this.name,this.lastName,this.expirience,project,proger);
    }
    getLastName(){
        return this.lastName;
    }
   getExpirience(){
        return this.expirience;
    } 
    setStatus(bool){
        this.status=bool;
    }
    static addBlock(id,name,lastName,expirience,project,proger){ 
            const table=document.getElementById("block"); 
            const row = document.createElement("tr"); 
            const statusProject = document.createElement("td"); 
            const dataManager = document.createElement("td"); 
            const dataProject= document.createElement("td"); 
            const ostalosNapisat = document.createElement("td"); 
            const progers = document.createElement("td"); 
            statusProject.appendChild(document.createTextNode("в процессе"));
            statusProject.id="status"+id;
            row.appendChild(statusProject);
            dataManager.appendChild(document.createTextNode("МЕНЕДЖЕР: "+name+" "+lastName+" опыт("+expirience+")"));
            row.appendChild(dataManager);
            dataProject.appendChild(document.createTextNode("ПРОЕКТ: "+project.getTitle()+" строк("+project.getKolStrok()+")"+" стоимость("+project.getCost()+" $)"));
            row.appendChild(dataProject);
            ostalosNapisat.appendChild(document.createTextNode("ОСТАЛОСЬ СТРОК: "+project.getKolStrok()));
            ostalosNapisat.id="kolStrok"+id;
            row.appendChild(ostalosNapisat);
            let spisok="ПРОГРАММИСТЫ: ";
            for(let i=0;i<proger.length;i++){
                spisok+=proger[i].getName()+" "+proger[i].getLastName()+" ("+proger[i].getLevel()+");";
            }
            progers.appendChild(document.createTextNode(spisok));
            row.appendChild(progers);
            table.appendChild(row);
            table.style.width="100%";
    }
    getJobProger(){
        return this.proger;
    }  
}