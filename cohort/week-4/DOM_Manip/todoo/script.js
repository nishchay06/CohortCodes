function getNewItem(title, description) {
    const newItem = document.createElement("div")
    const newItemTitle = document.createElement("div")
    newItemTitle.innerHTML = title || "Untitled Todo"
    const newItemDescription = document.createElement("div")
    newItemDescription.innerHTML = description || "Todo Desc"
    const newItemBtn = document.createElement("button")
    newItemBtn.innerHTML = "Mark as Done"
    newItemBtn.addEventListener('click',() => {
        newItemBtn.innerHTML = "Done!"
    })
    newItem.appendChild(newItemTitle)
    newItem.appendChild(newItemDescription)
    newItem.appendChild(newItemBtn)
    newItem.appendChild(document.createElement("br"))
    newItem.appendChild(document.createElement("br"))
    return newItem
}

// state will always be an array
//  every elemnent of array will have title and desc

function updateDOMAccToState(state) {
    const cont = document.getElementById('container')
    cont.innerHTML = ""
    state.forEach(element => {
        cont.appendChild(getNewItem(element.title,element.description))
    });
}

function addTodo() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const cont = document.getElementById('container')
    const newItem = getNewItem(title,description)
    cont.appendChild(newItem)
}

async function updateList() {
    // setInterval(async () => {
    //     const res = await fetch('https://sum-server.100xdevs.com/todos')
    //     const list = await res.json()
    //     updateDOMAccToState(list.todos)
    // }, 2000)
    const res = await fetch('https://sum-server.100xdevs.com/todos')
    const list = await res.json()
    updateDOMAccToState(list.todos)
}