
        // Sample data for demonstration
        const tasks = [
            { id: 1, title: 'Task 1' },
            { id: 2, title: 'Task 2' },
            { id: 3, title: 'Task 3' }
        ];

        // Function to render tasks in the list
        function renderTasks() {
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = ''; // Clear previous tasks

            tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.className = 'task-item';

                // Display task title
                listItem.textContent = task.title;

                // Task actions (Edit and Delete buttons)
                const actionsContainer = document.createElement('div');
                actionsContainer.className = 'task-actions';

                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', () => editTask(task.id));

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => deleteTask(task.id));

                actionsContainer.appendChild(editButton);
                actionsContainer.appendChild(deleteButton);

                listItem.appendChild(actionsContainer);

                taskList.appendChild(listItem);
            });
        }

        // Function to add a new task
        function addTask() {
            const taskTitleInput = document.getElementById('task-title');
            const newTaskTitle = taskTitleInput.value.trim();

            if (newTaskTitle !== '') {
                const newTask = { id: tasks.length + 1, title: newTaskTitle };
                tasks.push(newTask);

                // Clear the input field
                taskTitleInput.value = '';

                // Render updated task list
                renderTasks();
            }
        }

        // Function to edit a task (placeholder)
        function editTask(taskId) {
            alert(`coded by Alx student feature coming soon ${taskId}`);
        }

        // Function to delete a task
        function deleteTask(taskId) {
            const index = tasks.findIndex(task => task.id === taskId);
            if (index !== -1) {
                tasks.splice(index, 1);

                // Render updated task list
                renderTasks();
            }
        }

        // Initial rendering of tasks
        renderTasks();