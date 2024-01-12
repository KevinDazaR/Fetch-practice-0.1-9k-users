var result = fetch("https://memin.io/public/api/v2/users")
  .then((result) => {
    return result.json();
  })
  .then((serverData) => {
    console.log(serverData.data, typeof(serverData.data))
    const listaUsuarios = serverData.data
    let contador = 0
    listaUsuarios.forEach(function (element) {
      //console.log(element.name);
      
      /*CAPTURO*/
      let tableBody = document.getElementById("table_body");

      /* CREO */

      let trRow = document.createElement("tr"); /* CREO LA FILA */
      tableBody.appendChild(trRow); /* agrego a la tabla la fila ROW */

      /* ID */
      let tdId = document.createElement("td");
      let idElement = element.id;
      tdId.innerText = "#";
      tdId.innerHTML += idElement;

      // tdId.classList.add("text-center");
      trRow.appendChild(tdId);

      /*NAME */

      let tdName = document.createElement("td");
      let nameElement = element.name;
      tdName.innerHTML = nameElement;
      tdName.classList.add("text-center");
      trRow.appendChild(tdName);

      /*EMAIL */

      let tdEmail = document.createElement("td");
      let emailElement = element.email;
      tdEmail.innerHTML = emailElement;
      tdEmail.classList.add("text-center");
      trRow.appendChild(tdEmail);

      /* */

      let listaNameEmail = [element.name, element.email];

      /* BUTON EDITAR*/

      let tdEditar = document.createElement("td");
      let btnEditar = document.createElement("button");
      tdEditar.appendChild(btnEditar);
      btnEditar.innerText = "editar";
      btnEditar.classList.add("btn");
      btnEditar.classList.add("btn-primary");
      trRow.appendChild(tdEditar);

      btnEditar.setAttribute("type", "buton");
      btnEditar.setAttribute("onclick", `editar(${element.id})`);
      // btnEditar.setAttribute("value","");

      /* BUTON ELIMINAR*/

      let tdEliminar = document.createElement("td");
      let btnEliminar = document.createElement("button");
      trRow.appendChild(btnEliminar);
      btnEliminar.innerText = "eliminar";
      btnEliminar.classList.add("btn", "btn-primary");
      btnEliminar.setAttribute("data-bs-toggle", "modal");
      btnEliminar.setAttribute("data-bs-target", "#modal_window");

      tdEliminar.appendChild(btnEliminar);
      trRow.appendChild(tdEliminar);

      btnEliminar.setAttribute("type", "buton");
      btnEliminar.setAttribute("value", element.id);
      const elID = `${element.id} y ${contador}`
      //btnEliminar.addEventListener('click', (e) => eliminar(e))
      //console.log(element)
      const convertirObjetoJson = JSON.stringify(element)
      console.log(typeof(convertirObjetoJson))
      btnEliminar.setAttribute("onclick", `eliminar(${convertirObjetoJson})`);
      contador += 1
      console.log(elID, contador)
      /* BTN ELIMINAR */
    });
  });

function editar(idDelElement) {
  fetch(`https://memin.io/public/api/v2/users/${idDelElement}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      /* CAPTURE the inputs in html */
      let idInput = document.getElementById("id_input");
      let nameInput = document.getElementById("name_input");
      let emailInput = document.getElementById("email_input");

      idInput.value = data.id;
      nameInput.value = data.name;
      emailInput.value = data.email;
    });
}

function eliminar(idDelElement) {
  fetch(`https://memin.io/public/api/v2/users/${idDelElement}`, {
    method: "DELETE",
  });
  console.log(idDelElement)
  //const convertirObjeto = JSON.parse(idDelElement)
  console.log(typeof(idDelElement))
  const elementosModal = 
    `
      ${idDelElement.name}
      ${idDelElement.email}
    `

  //const elementoHTML = idDelElement.target

  let modal_text = document.getElementById("modal-text")
  //console.log(modal_body)
  let p_modal_body = document.createElement("p");
  //p_modal_body.innerText = elementoHTML.value;
  modal_text.innerText = elementosModal
  //console.log(elementoHTML.value)
  //p_modal_body.innerHTML = "";
  //console.log(p_modal_body)
  //modal_body.appendChild(p_modal_body);
}

// function pruebaModal(idDelElement){

//   let modal_body = document.getElementById("modal-body")
//   console.log(modal_body)
//   let p_modal_body = document.createElement("p");
//   p_modal_body.innerHTML = "a";
//   console.log(p_modal_body)
//   modal_body.appendChild(p_modal_body);


//   console.log("aa")

// }