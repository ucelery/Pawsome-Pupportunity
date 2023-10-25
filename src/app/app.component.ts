import { Component, OnInit } from '@angular/core';
import { Dog } from './model/dog';
import { DogService } from './service/dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pawsome-pupportunity';
  dogs: Dog [] = []
  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data: Dog[]) => {
      this.dogs = data;
    });
    
  }
}
