
// Your Code Here
async function updateBookTitle(id, newTitle){
    let response = await fetch(`http://localhost:3001/updateBook`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id, title: newTitle})
    })
}

updateBookTitle(3, "The Legends of Arathrae");


async function updateQuantity(id, newQuantity) {
    try {
      let response = await fetch(`http://localhost:3001/updateQuantity`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, quantity: newQuantity })
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

  
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  }
  
  updateQuantity(3, '5');
  

