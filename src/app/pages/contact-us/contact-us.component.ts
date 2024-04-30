import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  protected contactEmail?:String
  contructor(){
    this.contactEmail="email@example.com"
  }
}
