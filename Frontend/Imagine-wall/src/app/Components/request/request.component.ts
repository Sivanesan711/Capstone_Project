import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../Service/request.service';
import { RequestUs } from '../../Model/request';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  class: RequestUs;
  submitted = false;

  constructor(private classService: RequestService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.class = new RequestUs();
  }

  newClass(): void {
    this.submitted = false;
    this.class = new RequestUs();
  }

  // tslint:disable-next-line:typedef
  save() {
    console.log(this.class.name);
    this.classService.createClass(this.class)
      .subscribe(data => console.log(data), error => console.log(error));
    this.class = new RequestUs();
    this.gotoList();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/']);
  }



}
