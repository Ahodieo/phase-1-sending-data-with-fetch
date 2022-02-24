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
      debugger;
        let h2 = document.createElement('h2');
        h2.innerHTML = error.message;
        document.body.appendChild(h2);
        console.log(error.message);
    });
};