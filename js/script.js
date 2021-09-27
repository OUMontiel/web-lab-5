var post = $("#ButtonPost")
var clear = $("#ButtonClear")
var mark = $("#ButtonMark")
var del = $("#ButtonDelete")

post.on("click", function(e) {
    e.preventDefault()
    var todo = document.getElementById("todoText").value

    var list = document.getElementById("todoList")
    var div = document.createElement("div")
    var checkbox = document.createElement("input")
    var label = document.createElement("label")

    checkbox.type = "checkbox"
    checkbox.name = "todo"
    label.textContent = todo

    div.appendChild(checkbox)
    div.appendChild(label)
    list.appendChild(div)

    document.getElementById("todoText").value = ""
})

clear.on("click", function() {
    var todos = document.getElementsByName("todo")
    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = false
    }
})

mark.on("click", function() {
    var todos = document.getElementsByName("todo")
    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = true
    }
})

del.on("click", function() {
    var list = document.getElementById("todoList")
    list.innerHTML = ""
})
