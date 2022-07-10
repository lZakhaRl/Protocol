import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private matDialogRef: MatDialogRef<ModalComponent>
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.matDialogRef.close(this.data);
  }

  onCloseClick() {
    this.matDialogRef.close();
  }
}
