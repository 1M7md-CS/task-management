import { Component, inject, Input } from '@angular/core';
import { type UserModel } from '../user/user.model';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) selectedUser!: UserModel;
  isAddingTask = false;
  private tasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUser.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddingTask() {
    this.isAddingTask = false;
  }
}
