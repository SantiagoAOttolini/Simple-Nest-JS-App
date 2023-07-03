import { Task, TaskStatus } from './task.entity';
import { UpdateTaskDto } from './dto/task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(title: string, description: string): {
        id: string;
        title: string;
        description: string;
        status: TaskStatus;
    };
    getTaskById(id: string): Task;
    updateTask(id: string, updatedFields: UpdateTaskDto): Task;
    deleteTask(id: string): void;
}
