
// Your Code Here

function renderBook(book) {
  let root = document.querySelector("#root");

  let li = document.createElement("li");
  li.textContent = book.title;

  let quantityInput = document.createElement("input");
  quantityInput.value = book.quantity;

  let saveButton = document.createElement("button");
  saveButton.textContent = "Save";

  li.append(quantityInput, saveButton);

  root.append(li);
}


async function getBookList(){
  let listOfBooks = await fetch(`http://localhost:3001/listBooks`)
  let books = await response.json();

  books.forEach(renderBook);
}

getBookList()




// async function updateBookTitle(id, newTitle){
//     let response = await fetch(`http://localhost:3001/updateBook`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({id, title: newTitle})
//     })
// }

// updateBookTitle(3, "The Legends of Arathrae");


// async function updateQuantity(id, newQuantity) {
//     try {
//       let response = await fetch(`http://localhost:3001/updateQuantity`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ id, quantity: newQuantity })
//       });
  
//       if (!response.ok) {
//         throw new Error("Network response was not ok.");
//       }

  
//     } catch (error) {
//       console.error("Error updating quantity:", error);
//     }
//   }
  
//   updateQuantity(3, 6);

  
  

