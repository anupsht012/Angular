import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
@Input() title: string = '';
@Input() name: string = '';

@Output() toggleEvent: EventEmitter<string> = new EventEmitter<string>();

toggle(title: string) {
  this.toggleEvent.emit('toggle');
}

}
