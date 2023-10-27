import { Component, OnInit } from '@angular/core';
import { DogService } from '../service/dog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../model/dog';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id !: number;
  doggie: Dog = new Dog();

  constructor(private dogService: DogService,
    private router : Router,
    private route : ActivatedRoute) {

  }


  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.doggie = new Dog();
      this.dogService.getDog(this.id).subscribe(data => {
        this.doggie = data;
      });
  }

  

}
