add = document.getElementById("add");
function getAndUpdate(){
    console.log("Updating list....");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit,desc])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}
function update(){
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    // Adding Items To Table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element ,index)=> {
        str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-dark btn-sm" onclick="delete(${index})">Delete</button></td>
        </tr>`
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click",getAndUpdate);
update();
function deleted(itemIndex){
    console.log("Delete",itemIndex);
    itemJsonArrayStr = localStorage.setItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    //Delete itemIndex element from Array
    itemJsonArray.splice(itemIndex, 1)
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    update();
}