import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog';
import { DogService } from '../service/dog.service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent {
  dogs: Dog[] = [];
  constructor(private dogService: DogService) {}

  ngOnInit(): void {
	this.dogService.getDogs().subscribe((data: Dog[]) => {
      this.dogs = data; console.log(this.dogs);
    });

  }
}
