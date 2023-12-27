document.addEventListener('DOMContentLoaded', function () {
    // Array para almacenar las tareas
    let tasks = [];

    // Elementos del DOM
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Función para agregar una tarea
    window.addTask = function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Agregar tarea al array
            tasks.push(taskText);

            // Limpiar el input
            taskInput.value = '';

            // Actualizar la lista de tareas en el DOM
            updateTaskList();
        }
    };

    // Función para eliminar una tarea
    window.deleteTask = function (index) {
        // Eliminar tarea del array
        tasks.splice(index, 1);

        // Actualizar la lista de tareas en el DOM
        updateTaskList();
    };

    // Función para actualizar la lista de tareas en el DOM
    function updateTaskList() {
        // Limpiar la lista actual
        taskList.innerHTML = '';

        // Recorrer el array de tareas y agregar elementos a la lista
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${task}</span><button onclick="deleteTask(${index})">Eliminar</button>`;
            taskList.appendChild(listItem);
        });
    }
});
