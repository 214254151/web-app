import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web-App';
  aField = "Just a field";
  fieldClass = "basic";
  condition = false;
  displaySidebar = false;
  location: String = "Home";
  // img src="assets/images/cupcake.jpg"
  // img src="assets/images/logo2.jpg"   

  public goto(loc:String): void{
     this.location=loc;
   
    // this.aField=(this.location=="home")? "AT HOME" : "FAR AWAY";
    // this.aField=(this.location=="home")? "green" : "yellow";
    // this.aField=(this.location=="about")? "blue" : "navy";
    //commit
  
  }
}
