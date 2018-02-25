import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MessageService {

  // constructor(private toastr: ToastrService) {}

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    // this.toastr.info(message);
  }

  clear() {
    this.messages = [];
  }
}
