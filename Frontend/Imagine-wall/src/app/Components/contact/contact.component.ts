import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../Service/contact.service';
import { ContactUs } from '../../Model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  class: ContactUs;
  submitted = false;

  constructor(private classService: ContactService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.class = new ContactUs();
  }

  newClass(): void {
    this.submitted = false;
    this.class = new ContactUs();
  }

  // tslint:disable-next-line:typedef
  save() {
    console.log(this.class.name);
    this.classService.createClass(this.class)
      .subscribe(data => console.log(data), error => console.log(error));
    this.class = new ContactUs();
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
