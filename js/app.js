var result = fetch("https://memin.io/public/api/v2/users")
.then(result => {
    return result.json()
}).then(data => {
    data.data.forEach(function(element){
      console.log(element.name);

      /*CAPTURO*/
      let tableBody = document.getElementById('table_body');


      /* CREO */

      let trRow = document.createElement('tr'); /* CREO LA FILA */
      tableBody.appendChild(trRow);  /* agrego a la tabla la fila ROW */


      /* ID */
      let tdId = document.createElement('td');
      let idElement = element.id;
      tdId.innerHTML = idElement;
      trRow.appendChild(tdId);


      /*NAME */

      let tdName = document.createComment('td');
      let nameElement = element.name;
      tdName.innerHTML = nameElement;
      trRow.appendChild(tdName);

        // let tdCell = document.createElement('td'); /* agrego a la fila la celda */ 
        // trRow.appendChild(tdCell);
  
        // let nameElement = element.name; /* capturo en una variable el nombre */
        // tdCell.innerHTML = nameElement; /* agrego a la celda el nombre */


        // /*MAIL */ 
        // let emailElement = element.email;
        // trRow;
        // trRow.appendChild(tdCell);
  
        // tdCell.innerHTML = emailElement;

     


        
    })
  });
