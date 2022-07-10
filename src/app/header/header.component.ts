import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private matDialog: MatDialog) {}

  onOpenDialogClick() {
    let dialogRef = this.matDialog.open(ModalComponent, {
      data: {},
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((resuslt) => {});
  }
}
