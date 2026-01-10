// Temporary Storage for Todo Items
let todos = [];
var status = ["Inprogress", "Completed"];
var selectList = document.createElement("select");



//function to add a new todo item
function addTodo() {
    console.log("clicked");
    const todoTask = document.getElementById('todo-input');
    const todoDate = document.getElementById('date-input');
    var filterValue = document.getElementsByClassName("filter");

    console.log(todoTask.value, todoDate.value);

    if (todoTask.value === '' || todoDate.value === '') {
        alert('Please fill in both the todo item and the date.');
    } else {
        const newTodo = {
            task: todoTask.value,
            date: todoDate.value,
            status: "Inprogress"
        };

        // Add the new todo to the todos array
        todos.push(newTodo);
        console.log(todos);

        renderTodos();

        // Clear input fields
        todoTask.value = '';
        todoDate.value = '';
    }
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((todos, _) => {
        if(todos.status === "Inprogress") {
            todoList.innerHTML +=
        `<tr>
            <td id="task">${todos.task}</td>
            <td id="due-date">${todos.date}</td>
            <td><Select id="status-value"onchange="onSelectChange()">
                            <option value="Inprogress" selected="select">Inprogress</option>
                            <option value="Completed">Completed</option>
                        </Select></td>
        </tr>`;
        } else if(todos.status === "Completed") {
            todoList.innerHTML +=
        `<tr>
            <td id="task">${todos.task}</td>
            <td id="due-date">${todos.date}</td>
            <td><Select id="status-value"onchange="onSelectChange()">
                            <option value="Inprogress">Inprogress</option>
                            <option value="Completed" selected="select">Completed</option>
                        </Select></td>
        </tr>`;
        }

        // todoList.innerHTML +=
        // `<tr>
        //     <td id="task">${todos.task}</td>
        //     <td id="due-date">${todos.date}</td>
        //     <td><Select id="status-value"onchange="onSelectChange()">
        //                     <option value="Inprogress">Inprogress</option>
        //                     <option value="Completed">Completed</option>
        //                 </Select></td>
        // </tr>`;
        console.log("select: " ,selectList);
    });
}

// Function to Remove All Todo Items
function removeAllTodo() {
    todos = [];

    // Re-Render the empty list
    renderTodos();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML +=
        `<tr>
            <td>No Task Available</td>
        </tr>`;
}

function onSelectChange() {
    var selectElement = document.getElementById("status-value");
    var selectedValue = selectElement.value;

    const todoList = document.getElementById('todo-list');

    console.log("Selected value: ", selectedValue);
    if (selectedValue === "Inprogress") {
        selectElement.style.backgroundColor = "red";
    }
    else if (selectedValue === "Completed") {   
        selectElement.style.backgroundColor = "green";
    }
    console.log("aaa", todoList);

    tr = todoList.getElementsByTagName("tr");
    console.log("tr:", tr);
      
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    console.log("td:", td.value , "i:", i ,"selectedValue:", selectedValue);
      if (selectedValue == "Inprogress") {
        console.log("masuk if");
        todos[i].status = "Inprogress";
        console.log("inprogress");
        console.log("td:", todos[i].task, todos[i].status);
      } else if (selectedValue == "Completed") {
        todos[i].status = "Completed";
        console.log("complete");
        console.log("td:", todos[i].task, todos[i].status);
      }
    }
}

function checkStatus() {
    todos.forEach((todos, _) => {
        if (todos.status === "Inprogress") {
            selectList.style.backgroundColor = "red";
        }
        else if (todos.status === "Completed") {
            selectList.style.backgroundColor = "green";
        }
        var status = todos.status;
        console.log("todos status:", status);
    });
}

function filterStatus() {
    var filterValue = document.querySelector(".filter").value;
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    if(filterValue === "All") {
        renderTodos();
    }
    else{
        todos.forEach((todos, _) => {
        if (todos.status === filterValue) {
            todoList.innerHTML +=
        `<tr>
            <td id="task">${todos.task}</td>
            <td id="due-date">${todos.date}</td>
            <td><Select id="status-value"onchange="onSelectChange()">
                            <option value="Inprogress">Inprogress</option>
                            <option value="Completed">Completed</option>
                        </Select></td>
        </tr>`;
        console.log("filter todos:", todos);
        }
    });
    }
    console.log("filter value:", filterValue);
}
