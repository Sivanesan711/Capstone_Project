import { RequestUs } from '../../../Model/request';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../Service/request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  id: number;
  class: RequestUs;

  constructor(private route: ActivatedRoute, private router: Router,
              private classService: RequestService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.class = new RequestUs();

    this.id = this.route.snapshot.params.id;

    this.classService.getClass(this.id)
      .subscribe(data => {
        this.class = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['/request-list']);
  }


}
