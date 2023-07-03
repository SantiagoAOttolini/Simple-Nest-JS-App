import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
export declare class TasksController {
    private tasksServide;
    constructor(tasksServide: TasksService);
    getAllTasks(): import("./task.entity").Task[];
    createTask(newTask: CreateTaskDto): {
        id: string;
        title: string;
        description: string;
        status: import("./task.entity").TaskStatus;
    };
    deleteTask(id: string): void;
    updateTask(id: string, updateFields: UpdateTaskDto): import("./task.entity").Task;
}
