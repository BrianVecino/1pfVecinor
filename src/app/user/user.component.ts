import { Component } from '@angular/core';
import { User } from '../interface';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'createdAt'];
  users: User [] = [
    {
      id : 1,
      nombre: 'ola',
      apellido: 'aas',
      email: 'ola@test.com',
      createdAt: new Date
    },

    {
      id : 2,
      nombre: 'ola',
      apellido: 'aas',
      email: 'ola@test.com',
      createdAt: new Date
    },]
  
  constructor (private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog.open(UserDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.users = [...this.users, result]
        }
      }
    })
  }
}
