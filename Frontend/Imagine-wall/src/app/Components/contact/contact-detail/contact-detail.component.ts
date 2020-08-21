import { ContactUs } from '../../../Model/contact';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../Service/contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  id: number;
  class: ContactUs;

  constructor(private route: ActivatedRoute, private router: Router,
              private classService: ContactService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.class = new ContactUs();

    this.id = this.route.snapshot.params.id;

    this.classService.getClass(this.id)
      .subscribe(data => {
        this.class = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['/contact-list']);
  }

}
