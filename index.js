const { json } = require("express/lib/response");

function submitData(name, email) {
const formData = {
   name: name,
    email: email,
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
        let h2 = document.createElement('h2');
        h2.innerHTML = object.id;
        document.body.appendChild(h2);
        console.log(object);
    })
    .catch(function (error) {
        let h3 = document.createElement('h3');
        h3.innerHTML = alert("Unauthorized Access");
        document.body.appendChild(h3);
        console.log(error.message);
    });
};