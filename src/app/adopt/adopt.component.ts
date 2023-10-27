import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog';
import { DogService } from '../service/dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent {
  dogs: Dog[] = [];
  constructor(private dogService: DogService,
    private router: Router) {}

  ngOnInit(): void {
	this.dogService.getDogs().subscribe((data: Dog[]) => {
      this.dogs = data; console.log(this.dogs);
    });

  }

  toView(dogId : number){
    // You can define the route path where you want to navigate to
    const routePath = `/view/${dogId}`;

    // Navigate to the specified route
    this.router.navigate([routePath]);
  }
}
