import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Dog } from '../model/dog';
import { DogService } from '../service/dog.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('DogDeetsPopup') DogDeetsPopup: ElementRef;

  // Description Modal Things
  @ViewChild('DogName') DogName!: ElementRef;
  @ViewChild('DogAge') DogAge!: ElementRef;
  @ViewChild('DogSex') DogSex!: ElementRef;
  @ViewChild('DogSize') DogSize!: ElementRef;
  @ViewChild('DogBreed') DogBreed!: ElementRef;
  @ViewChild('DogBirthday') DogBirthday!: ElementRef;
  @ViewChild('DogDescription') DogDescription!: ElementRef;


  title = 'pawsome-pupportunity';
  dogs: Dog [] = []
  visible_pop_up = false


  constructor(private dogService: DogService,
    private route : ActivatedRoute,
    private router : Router) {
    this.DogDeetsPopup = new ElementRef(null);
  }
  
  

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data: Dog[]) => {
      this.dogs = data;
    });

  }

  toView(dogId : number){
    // You can define the route path where you want to navigate to
    const routePath = `/view/${dogId}`;

    // Navigate to the specified route
    this.router.navigate([routePath]);
  }
}
