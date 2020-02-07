import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit {

  constructor(private activtedRoute: ActivatedRoute) {
    let id = this.activtedRoute.snapshot.paramMap.get('id');
    console.log(id)
   }

  ngOnInit() {
  }

}
