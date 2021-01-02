import { Component, OnInit } from '@angular/core';
import { DataForm } from "./dataform";

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.scss']
})
export class RequestformComponent implements OnInit {

  constructor() {
  }

  model = new DataForm("checkbox_1","Akshay");
  submitted = false;
  onSubmitted() {
    this.submitted = true;

    // TODO: Remove this once done
    console.log("Submitted");
  };

  ngOnInit(): void {
  }

}
