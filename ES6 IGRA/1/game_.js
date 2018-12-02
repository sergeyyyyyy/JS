function click(elem,handler){
    elem.addEventListener("click",handler);
}
    const delay=1000;
    let tik=document.getElementById("tik").innerText;
    let idInterval;
    function start(){
            if(document.getElementById("startButton").value==="старт"){
            if(document.getElementById("nameCompany").value!=="" &&
                document.getElementById("moneyCompany").value!=="" ){
                document.getElementById("startButton").value="стоп";
                document.getElementById("money").innerText=document.getElementById("moneyCompany").value;
                document.getElementById("visibleAdd").style.display="table-row";
                idInterval=setInterval(funct,delay);
        }
        } else {
        if(document.getElementById("startButton").value!=="новая игра"){
            clearInterval(idInterval);
            document.getElementById("startButton").value="новая игра";
        } else {
            window.location.reload();
        }
    }
};
    click(startButton,start); 
    let jobProcess=[];
    let i=0; 
    function funct(){
    document.getElementById("tik").innerText=tik;
        if(sProject() && sManager() && sProger()){
            let i=0;
            for(i=0;i<manager.length;i++){
                if(manager[i]!==null && manager[i].getStatus()){
                break;
                }
            }
            for(k=0;k<project.length;k++){
                if(project[k].getStatus()){
                    break;
                }
            }
            let svobodProger=[]; 
            for(let key=0;key<proger.length;key++){
                if(proger[key]!==null && proger[key].getStatus()){ 
                proger[key].setStatus(false); 
                svobodProger.push(proger[key]);
                proger[key]=null;
                }
            }
            document.getElementById("pr"+project[k].getIdProject()).onclick();
            project[k].setStatus(false);
            document.getElementById("m"+manager[i].getIdManager()).onclick();
            for(let key=0;key<svobodProger.length;key++){
                document.getElementById("p"+svobodProger[key].getIdProger()).onclick();
            }
            manager[i].zveno(project[k],svobodProger); 
        }   
            for(let i=0;i<manager.length;i++){
                if(manager[i]!==null && manager[i].getStatus()===false){
                    manager[i].tik();
                    if(manager[i]!==null && manager[i].getStatus()){ 
                        manager[idManager]=new Manager(idManager,manager[i].getName(),manager[i].getLastName(),manager[i].getExpirience());
                        insertManager(manager[idManager]);
                        idManager++;
                        let m=i;
                        let arrAdd = manager[i].getJobProger();
                        for(let i=0;i<arrAdd.length;i++){
                            proger[idProger]=new Proger(idProger,arrAdd[i].getName(),arrAdd[i].getLastName(),arrAdd[i].getLevel());
                            insertProger(proger[idProger]);
                            idProger++;
                    }
                    manager[m]=null; 
                }
                chekGame();
            }
        }
}
    function chekGame(){
        if (document.getElementById("money").innerHTML===0) {
            clearInterval(idInterval);
            document.getElementById("warning").innerText="игра окончена.кэш потрачен,начните новую игру:)";
            document.getElementById("visibleWarning").style.display="block";
            document.getElementById("startButton").value="новая игра";
        } else {
        if(document.getElementById("money").innerHTML<0) {
            clearInterval(idInterval);
            document.getElementById("warning").innerText="игра окончена.кэш потрачен,начните новую игру:)";
            document.getElementById("visibleWarning").style.display="block";
            document.getElementById("startButton").value="новая игра";
        }
    }
}
    function sManager(){
        if(manager.length===0){
            return false;
        } else {
        for(let k=0;k<manager.length;k++){
            if(manager[k]!==null && manager[k].getStatus()) {
            return true;    
            }
        }
            return false;
        }
    }
    function sProger(){
        if(proger.length===0){
            return false;
        } else {
            for(let k=0;k<proger.length;k++){
                if(proger[k]!==null && proger[k].getStatus()) {
                return true;    
                }   
            }       
                return false;
            }
    }   
    function sProject(){
        if(project.length===0){
            return false;
        } else {
        for(let k=0;k<project.length;k++){
            if(project[k].getStatus()) {
            return true;    
            }
        }
        return false;
    }
    }
    var project=[];
    var manager=[];
    var proger=[];

    var idProject=0;
    var idManager=0;
    var idProger=0;
    
    click(document.getElementById("addProject"),newProject);

    function newProject(){
        const nameProject=document.getElementById("nameProject").value;
        const kolStrokProject=document.getElementById("kolStrokProject").value;
        const costProject=document.getElementById("costProject").value;

        if(nameProject!=="" && costProject!=="" && kolStrokProject!==""){
            project[idProject]=new Project(idProject,nameProject,costProject,kolStrokProject);
            insertProject(project[idProject]);
            idProject++;
            document.getElementById("nameProject").value="";
            document.getElementById("costProject").value="";
            document.getElementById("kolStrokProject").value="";      
        }
    }
    function insertProject(project){
        const tableInsertProject=document.getElementById("insertProject"); 
        const row = document.createElement("tr"); 
        const cell = document.createElement("td"); 
        const idProject="pr"+project.getIdProject(); 
        const deleted=document.createElement("input");
        deleted.id=idProject;
        deleted.type="button";
        deleted.value="убрать";
        deleted.onclick=function(){
            cell.parentElement.removeChild(cell);
        }
        const str=document.createTextNode(project.getTitle()+": cтоимость("+project.getCost()+" $) Строк("+project.getKolStrok()+")");
        cell.appendChild(deleted);
        cell.appendChild(str);
        row.appendChild(cell);
        tableInsertProject.appendChild(row);
    }
    click(document.getElementById("addManager"),newManager);
    function newManager(){
        const nameManager=document.getElementById("nameManager").value;
        const lastNameManager=document.getElementById("lastNameManager").value;
        const expirienceManager=document.getElementById("expirienceManager").value;

        if(nameManager!=="" && lastNameManager!=="" && expirienceManager!==""){
            manager[idManager]=new Manager(idManager,nameManager,lastNameManager,expirienceManager);

        document.getElementById("nameManager").value="";
        document.getElementById("lastNameManager").value="";
        document.getElementById("expirienceManager").value="";

        insertManager(manager[idManager]); 
        idManager++; 
        }
    }


    function insertManager(manager){
        const tableInsertManager=document.getElementById("insertManager"); 
        const row = document.createElement("tr"); 
        const cell = document.createElement("td"); 
        const idManager="m"+manager.getIdManager(); 
        const deleted=document.createElement("input");
        deleted.id=idManager;
        deleted.type="button";
        deleted.value="убрать";
        deleted.onclick=function(){
            manager[idManager.substring(1,idManager.length)]=null;
            cell.parentElement.removeChild(cell);
        }
        const str=document.createTextNode(manager.getName()+" "+manager.getLastName()+" Опыт("+manager.getExpirience()+")");
        cell.appendChild(str);
        cell.appendChild(deleted);
        row.appendChild(cell);
        tableInsertManager.appendChild(row);
    }

    click(document.getElementById("addProger"),addProger);

    function addProger(){
        const nameProger=document.getElementById("nameProger").value;
        const lastNameProger=document.getElementById("lastNameProger").value;
        const levelProger=document.getElementById("levelProger").value;
        if(nameProger!=="" && lastNameProger!==""){

            proger[idProger]=new Proger(idProger,nameProger,lastNameProger,levelProger);
            document.getElementById("nameProger").value="";
            document.getElementById("lastNameProger").value="";
            insertProger(proger[idProger]); 
            idProger++;
        }
    }
    function insertProger(proger){
        var tableInsertProger=document.getElementById("insertProger"); 
        var row = document.createElement("tr");
        var cell = document.createElement("td"); 
        var idProger="p"+proger.getIdProger(); 
        var deleted=document.createElement("input");
        deleted.id=idProger;
        deleted.type="button";
        deleted.value="убрать";
        deleted.onclick=function(){
        cell.parentElement.removeChild(cell);
        }
        var str=document.createTextNode(proger.getName()+" "+proger.getLastName()+" ");
        cell.appendChild(str);
        cell.appendChild(deleted);
        row.appendChild(cell);
        tableInsertProger.appendChild(row);
    }
    function warning(line){
        document.getElementById("warning").innerText=line;
        document.getElementById("visibleWarning").style.display="block";
        setTimeout(function () {
        document.getElementById("visibleWarning").style.display="none"; 
        }
        ,6000);
    }