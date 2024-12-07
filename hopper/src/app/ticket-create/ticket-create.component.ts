import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

//primeNG imports
import { PrimengModule } from '../../primeng.module';

//My imports
import { UserService } from '../services/user.service';
import { RouterService } from '../services/router.service';
import { StatusEnum } from '../services/StatusEnum';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../services/ticket.model';

@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [PrimengModule, NgStyle, NgClass, FormsModule],
  templateUrl: './ticket-create.component.html',
  styleUrl: './ticket-create.component.css',
})
export class TicketCreateComponent {
  private userService = inject(UserService);
  private routerService = inject(RouterService);
  private ticketService = inject(TicketService);

  user = this.userService.getLoggedInUser();
  private dateObj = new Date();
  ticket = {
    id: '100',
    userId: '0',
    status: StatusEnum.Open,
    title: 'title100',
    description: 'description100',
    dateAndTimeOfCreation:
      this.dateObj.getFullYear() +
      '/' +
      this.dateObj.getMonth() +
      '/' +
      this.dateObj.getDate() +
      ' @ ' +
      this.dateObj.getHours() +
      ':' +
      this.dateObj.getMinutes() +
      ':' +
      this.dateObj.getSeconds(),
  };

  targetEmployeeID!: number;

  titleText!: string;
  descriptionText!: string;
  background: any;

  onReturnButtonClick() {
    // This currently discards/does not save in progress ticket
    console.log('event: onReturnButtonClick');
    this.routerService.navigateToHome();
  }

  onDiscardButtonClick() {
    // This currently discards/does not save in progress ticket
    console.log('event: onDiscardButtonClick');
    this.onReturnButtonClick();
  }

  onBeginCompleteTicketCreationClick() {
    // This currently discards/does not save in progress ticket
    // this.onReturnButtonClick();
    console.log('event: onBeginCompleteTicketCreationButtonClick');
    this.visible = true;
  }

  onCompleteTicketCreationClick() {
    console.log('event: onCompleteTicketCreationButtonClick');
    const ticketToEmail = this.ticketService.createNewTicket(
      this.user,
      this.titleText,
      this.descriptionText
    );
    console.log(this.ticketService.tickets);
    this.routerService.navigateToHome();
  }

  // sendMail(
  //   ticketId: number,
  //   ticketTitle: string,
  //   ticketDescription: string,
  //   email: string
  // ) {
  //   const emailContent =
  //     'This is your confirmation, as you have Succesfully created a Ticket!\nTicket Title: ' +
  //     ticketTitle +
  //     '\nTicket Description: ' +
  //     ticketDescription;
  //   var link =
  //     'mailto:' +
  //     email +
  //     '' +
  //     '?cc=myCCaddress@example.com' +
  //     '&subject=' +
  //     encodeURIComponent(
  //       'Ticket Creation Success(Ticket id: ' + ticketId + ')'
  //     ) +
  //     '&body=' +
  //     encodeURIComponent(emailContent);
  //   window.location.href = link;
  // }

  visible: boolean = false;
}
