import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'gp-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = ''
  group!:FormGroup

  constructor(private reference:MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.title = data ? 'EDICIÓN' : 'NUEVO'
     }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm(){
    this.group = new FormGroup({
      id: new FormControl(this.data?._id),
      cedula: new FormControl(this.data?.cedula, Validators.required),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      apellido: new FormControl(this.data?.apellido,Validators.required),
      fecha: new FormControl(this.data?.fecha,Validators.required),
      diagnostico: new FormControl(this.data?.diagnostico,Validators.required)
    })
  }

  save(){
    const record = this.group.value
    this.reference.close(record)
  }

}
