const appendTable = (name, age, gender, tBody) => {
    let tr = document.createElement("tr");
  
    let td1 = document.createElement("td");
    td1.innerText = name;
    let td2 = document.createElement("td");
    td2.innerText = age;
    let td3 = document.createElement("td");
    td3.innerText = gender;
    tr.append(td1, td2, td3);
  
    tBody.append(tr);
  };
  
  export { appendTable };