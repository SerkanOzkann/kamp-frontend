import { Component } from '@angular/core';

@Component({ //{}= obje demektir.
  selector: 'app-root',  //index.html den gelir. 
  templateUrl: './app.component.html', //./ aynı klasör demektir.
  styleUrls: ['./app.component.css']  // [] array demektir.
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Serkan Ozkan";
 
}
// html datasını yönettiğimiz yerdir.
//any her şeyi alabilir demektir.