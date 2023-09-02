var bucketList = [];
var listcontainer  = document.querySelector("#list-container");
function addValues(){
    let value = document.getElementById("input-field").value;
    bucketList.push(value);
    showList();
}

function showList(){
    listcontainer.innerHTML="";
    for(let i=0;i<bucketList.length; i++){
        var li = document.createElement('li');    
        li.innerHTML = bucketList[i]+`<span><img onclick="remove(`+i+`)" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" alt=""></span>`;
        listcontainer.append(li);  
    }
}

function reset(){
    bucketList = [];
    showList();
}
function remove(i){
    bucketList.splice(i,1);
    showList();
}