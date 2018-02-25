import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MessageService {

  constructor(private toastr: ToastrService) {}

  messages: string[] = [];

  add(message: string) {
    this.toastr.success(message);
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
