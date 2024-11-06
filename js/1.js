document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
    var list = document.getElementById("demo");
    var value = document.getElementById("newvalue").value;
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(value));
    list.appendChild(entry);
}