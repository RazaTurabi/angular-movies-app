import { Component, OnInit } from '@angular/core';
import { filter, max, Subscription } from 'rxjs';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private movieService:MovieService) 
  {}

  cart_value:number=0
  ngOnInit(): void {
    //subs obs 1
   this.movieService.getObs1().subscribe(
    val=>console.log(val),
   er =>console.log(er),
   () =>console.log("Observation of observable 1 is complete")
    )
 
    //subscribing obs2
    this.movieService.getObs2().subscribe(
      val=>console.log(val),
      er => console.log(er),
      () => console.log("Observation of observable 2 is complete")
    )

     //subscribing obs3
     this.movieService.getObs3().subscribe(
      val=>console.log(val),
      er => console.log(er),
      () => console.log("Observation of observable 3 is complete")
    )

      //subscribing obs4
    this.is_subscribed = this.movieService.getObs4().subscribe(
        val=>console.log(val),
        er => console.log(er),
        () => console.log("Observation of observable 4 is complete")
      )

      //subscribing obs5 using operator
      this.movieService.getObs5().pipe(filter(x=>x>10),filter(y=>y%2==0),max())
      .subscribe(filtered_nmbers=>console.log(filtered_nmbers))

      //get updated cart value
      this.movieService.get_cart_value().subscribe(val=>this.cart_value=val)
 
  }

  private is_subscribed!:Subscription
  unsubscribe_obs4()
  {
   if(this.is_subscribed)
   {
     this.is_subscribed.unsubscribe()
     console.log("Obs4 is Unsubscribed");
   }
   
   
  }
}
