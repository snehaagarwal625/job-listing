import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-appliedby',
  templateUrl: './appliedby.component.html',
  styleUrls: ['./appliedby.component.scss']
})
export class AppliedbyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
