// let numberArray = [10,40,70,50,30,20,60];

// console.log(numberArray);
// console.log(numberArray.push(80));
// console.log(numberArray);
// console.log(numberArray.length);
// console.log(numberArray.push(100));
// console.log(numberArray);
// console.log(numberArray.pop());
// console.log(numberArray.sort());
// console.log(numberArray.shift());
// console.log(numberArray);
// console.log(numberArray.toString());

const customers = [
  {
    name: "Saman",
    age: 52,
    address: "Kegalle",
  },
  {
    name: "Nimal",
    age: 35,
    address: "Rambukkana",
  },
  {
    name: "Kamal",
    age: 44,
    address: "Mawenella",
  },
];

function addCustomer() {
  let name = document.getElementById("txtUserName").value;
  let age = document.getElementById("txtAge").value;
  let address = document.getElementById("txtAddress").value;

  customers.push({
    name,
    age,
    address,
  });

  console.log(customers);
  showAllCustomers();
  alert("Customer added Successfully!"); 
}


function showAllCustomers() {
  let tblCustomers = document.getElementById("tblCustomers");

  let tableBody = `<tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                   </tr>`;

  customers.forEach((data) => {
    console.log(data);

    tableBody += `<tr>
                    <td>${data.name}</td>
                    <td>${data.age}</td>
                    <td>${data.address}</td>
                  </tr>`;
  });

  tblCustomers.innerHTML = tableBody;
  console.log(tableBody);
}
