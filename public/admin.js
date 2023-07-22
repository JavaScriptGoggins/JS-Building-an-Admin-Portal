
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

