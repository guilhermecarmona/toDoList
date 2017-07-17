toDoList

- Server starts on localhost:8888
- Two tables are used : todos - contains the TODO Lists
                        tasks - contains the tasks that are assigned to a todo list

Requests:

GET /todos - Reads all TODO lists;   
GET /todo/1 - Reads a TODO list with ID 1 and its associated tasks;  
GET /todo/1/tasks - Reads all tasks associated to TODO list with ID 1;  
GET /tasks - Reads all Tasks;  
GET /task/1 - Reads task with ID 1;  
POST /todo - Creates a TODO list;  
POST /todo/1/task - Creates a Task and associate it with TODO list with ID 1;  
DELETE /todo/1 - Deletes TODO list with ID 1;  
DELETE /task/1 - Deletes Task with ID 1;  
PUT /todo/1 - Updates TODO List with ID 1;  
PUT /task/1 - Updates Task with ID 1;  
PATCH /task/1 - Sets to Completed the Status of the Task with ID 1;  


