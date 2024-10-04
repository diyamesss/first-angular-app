import { Component, signal, computed, Input, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'
import { User } from './user.model'
import { CardComponent } from "../sharedui/card/card.component";

// const ramdomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// interface User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  standalone: false,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required:true}) user!: User;
  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Input({required:true}) selected!: Boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();


  // imagePath = computed(() => 'assets/users/' + this.avatar());

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  
  // selectedUser = DUMMY_USERS[ramdomIndex];
  // selectedUser = signal(DUMMY_USERS[ramdomIndex]);

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onSelectUser(){
    this.select.emit(this.user.id);
    // const ramdomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[ramdomIndex]);
    // this.selectedUser = DUMMY_USERS[ramdomIndex];
  }
}
  