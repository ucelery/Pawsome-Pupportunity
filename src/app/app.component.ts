import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Dog } from './model/dog';
import { DogService } from './service/dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  constructor(private dogService: DogService) { 
    this.DogDeetsPopup = new ElementRef(null)
  }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data: Dog[]) => {
      this.dogs = data;
    }); 
  }

  toggleDogDescription(id: number) {
    if (this.visible_pop_up)  {
      // HIDE
      this.DogDeetsPopup.nativeElement.classList.add('hide');
      this.visible_pop_up = false
    } else {
      // SHOW
      this.DogDeetsPopup.nativeElement.classList.remove('hide');
      this.visible_pop_up = true
    }
  }
}
