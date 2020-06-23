import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faMapMarkedAlt, faPhone, faDatabase} from '@fortawesome/free-solid-svg-icons';
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  user;

  constructor(private userService: UserService) {}

  faEnvelope= faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;

  ngOnInit(): void {
  }

  getNextUser() {
    this.userService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0];
      },
      (err) => {
        console.log("Error");
      },
    );
  }

}
