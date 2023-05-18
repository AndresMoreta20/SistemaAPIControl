import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

/**
 * @title Dialog Animations
 */
@Component({

  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html'
})
export class PopUpComponent{
  dialogRef: MatDialogRef<DialogAnimationsExampleDialog> = this.dialog.open(DialogAnimationsExampleDialog, {
    width: '250px',
    
  });
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialogRef;
    
    
  }
  closeDialog() {
    this.dialogRef.close();
  }
  
  
}

@Component({

 selector: 'app-pop-up',
 templateUrl: './pop-up.component.html',
 styleUrls: ['./pop-up.component.css']
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {
    
  }
  closeDialog() {
    this.dialogRef.close();
  }
}




