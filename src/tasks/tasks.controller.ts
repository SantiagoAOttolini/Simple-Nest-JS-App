import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
@Controller('tasks')
export class TasksController {

  //VOY A PODER USAR TODOS LOS METODOS CREADOS EN TASK SERVICE ACA
  constructor(private tasksServide: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksServide.getAllTasks();
  }

  @Post()
  //El BODY es como el req.body, el newTask es donde vas a guardar el Body
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksServide.createTask(newTask.title, newTask.description)
  }

  @Delete(':id')
  deleteTask(@Param('id') id:string) {
    this.tasksServide.deleteTask(id)
  }

  @Patch(":id") 
  updateTask(@Param('id') id:string, @Body() updateFields: UpdateTaskDto) {
    return this.tasksServide.updateTask(id, updateFields)
  }
}
