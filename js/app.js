// // var container_all = document.createElement("div");

// const container_root = document.getElementById("root");
// container_root.classList.add("row");

// const container_leftShowUser = document.createElement("div");
// container_root.appendChild(container_leftShowUser);

// container_leftShowUser.classList.add("col-md-6");
// const cardShowUser = document.createElement("div");

// cardShowUser.classList.add("card");
// container_leftShowUser.appendChild(cardShowUser);

//p
let p = document.createElement("p");
p.innerHTML = "Users settings";
cardShowUser.appendChild(p);

var resultadoDePeticionServerAppi = fetch("https://memin.io/public/api/users")
  .then((resultado) => {
    return resultado.json();
  })
  .then((data) => {
    data.forEach(function (element) {
      //   const container_root = document.getElementById("root");
      //   container_root.classList.add("row");
      //   const container_leftShowUser = document.createElement("div");
      //   container_root.appendChild(container_leftShowUser);
      //   container_leftShowUser.classList.add("col-md-6");
      //   const cardShowUser = document.createElement("div");
      //   cardShowUser.classList.add("card");
      //   container_leftShowUser.appendChild(cardShowUser);
      //   //p
      //   let p = document.createElement("p");
      //   p.innerHTML = "Users settings";
      //   cardShowUser.appendChild(p);
    });
  });

// var root = document.getElementById("root");

// var result = fetch("https://memin.io/public/api/users")
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     data.forEach(function (element) {
//       let col = document.createElement("div");
//       col.classList.add("col-md-3");
//       root.appendChild(col);

//       let card = document.createElement("div");
//       card.classList.add("card");
//       col.appendChild(card);

//       let card_body = document.createElement("div");
//       card_body.classList.add("card-body");
//       card.appendChild(card_body);

//       let p = document.createElement("p");
//       p.innerText = element.name;
//       card_body.appendChild(p);

//       let button = document.createElement("button");
//       button.classList.add("btn", "btn-danger");
//       button.innerText = "Eliminar";
//       card_body.appendChild(button);

//       let button_actualizar = document.createElement("button");
//       button_actualizar.classList.add("btn", "btn-warning");
//       button_actualizar.innerText = "Actualizar";
//       card_body.appendChild(button_actualizar);

//       let button_detalles = document.createElement("button");
//       button_detalles.classList.add("btn", "btn-info");
//       button_detalles.innerText = "Ver detalles";
//       card_body.appendChild(button_detalles);
//     });
//   });
