var Manager=(function(){

    var Manager=function(idManager,name,lastName,expirience){
        this.idManager=idManager;
        this.name=name;
        this.lastName=lastName;
        this.expirience=expirience;
        this.status=true;
    }

    Manager.prototype.getIdManager=function(){
      return this.idManager;
    }

    Manager.prototype.getName=function(){
      return this.name;
    }
  Manager.prototype.getLastName=function(){
      return this.lastName;
    }
Manager.prototype.getExpirience=function(){
       return this.expirience;
    }

      Manager.prototype.getStatus=function(){
          if(this.status) {
          return true;
        }
         else{
           return false;
        }
    }

      Manager.prototype.setStatus=function(bool){
        this.status=bool;
    }

  Manager.prototype.zveno=function(project,proger){
         this.status=false;
        this.project=project;
            this.proger=proger;
        addBlock(this.idManager,this.name,this.lastName,this.expirience,project,proger); 
    }

    function addBlock(id,name,lastName,expirience,project,proger){

              var table=document.getElementById("block");
            var row = document.createElement("tr");
               var statusProject = document.createElement("td");
            var dataManager = document.createElement("td");
              var dataProject= document.createElement("td");
            var ostalosNapisat = document.createElement("td");
             var progers = document.createElement("td");

            statusProject.appendChild(document.createTextNode("Выполняется"));
              statusProject.id="status"+id;
              row.appendChild(statusProject);
            dataManager.appendChild(document.createTextNode("МЕНЕДЖЕР: "+name+" "+lastName+" опыт("+expirience+")"));
              row.appendChild(dataManager);
               dataProject.appendChild(document.createTextNode("ПРОЕКТ: "+project.getTitle()+" строк("+project.getKolStrok()+")"+" стоимостью("+project.getCost()+" $)"));
            row.appendChild(dataProject);
              ostalosNapisat.appendChild(document.createTextNode("ОСТАЛОСЬ СТРОК: "+project.getKolStrok()));
            ostalosNapisat.id="kolStrok"+id; 
               row.appendChild(ostalosNapisat);
              var spisok="ПРОГРАММИСТ(Ы): ";
            for(var i=0;i<proger.length;i++){
                spisok+=proger[i].getName()+" "+proger[i].getLastName()+" ("+proger[i].getLevel()+");";
            }
             progers.appendChild(document.createTextNode(spisok));
            row.appendChild(progers);
             table.appendChild(row);
             table.style.width="100%";
    }

    Manager.prototype.tik=function(){
          budgetCompany=document.getElementById("money").innerHTML;
        ostalosStrok=document.getElementById("kolStrok"+this.getIdManager()).innerHTML;
          ostalosStrok=ostalosStrok.substring(16,ostalosStrok.length);
          checkStatus=document.getElementById("status"+this.getIdManager()).innerHTML;
         for(var i=0;i<this.proger.length;i++){
            this.proger[i].kolStrokCode();
              budgetCompany=Number(budgetCompany)-this.proger[i].getCostStrokLevel();
            document.getElementById("money").innerText=budgetCompany;
               ostalosStrok=Number(ostalosStrok)-Number(this.proger[i].getKolStrok())*Number(this.expirience);
                 document.getElementById("kolStrok"+this.getIdManager()).innerText="ОСТАЛОСЬ СТРОК: "+ostalosStrok;
        }    
         if(ostalosStrok<=0) {
           document.getElementById("status"+this.idManager).innerText="Выполнено";
           document.getElementById("kolStrok"+this.getIdManager()).innerText="ВЫПОЛНЕНИЕ ЗАВЕРШЕНО";
           this.status=true;
            document.getElementById("money").innerText=Number(document.getElementById("money").innerHTML)+Number(this.project.getCost());

        }
    }

       Manager.prototype.getJobProger=function(){
          return this.proger;
    }
      return Manager;
})()