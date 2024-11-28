import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import { TicketService } from '../services/ticket.service';
import { StatusEnum } from '../services/StatusEnum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  routerService = inject(RouterService);
  ticketService = inject(TicketService);
  tickets = [
    { id: 1, details: 'Ticket #1: Issue with login.' },
    { id: 2, details: 'Ticket #2: Unable to access dashboard.' },
    { id: 3, details: 'Ticket #3: Request for new user setup.' },
  ];
  editedTicketId: number | null = null;
  updatedDetails: string = '';

  constructor(private router: Router) {}
  /**
   * Navigate to edit the ticket
   * @param ticket - The ticket to edit
   */

  editTicket(ticket: any): void {
    console.log('Navigating to edit Ticket ID:', ticket.id);
    this.router.navigate(['/ticket', ticket.id]); // Ensure `/ticket/:id` is defined in routes
  }
  /**
   * Delete a ticket
   * @param ticketId - The ID of the ticket to delete
   */
  deleteTicket(ticketId: number): void {
    this.tickets = this.tickets.filter((ticket) => ticket.id !== ticketId);
    console.log(`Ticket with ID ${ticketId} deleted.`);
  }

  goToHome(): void {
    console.log('Navigating to Home...');
    this.router.navigate(['/login']);
  }

  openSettings(): void {
    console.log('Opening Settings...');
    this.router.navigate(['/settings']); // setting placeholder
  }

  addTicket(): void {
    console.log('Adding a new ticket...');
    // Add logic for creating a new ticket
  }

  // TOMISLAV ADDITION
  private dateObj = new Date();

  onEditTicketClickTEMPFUNCTION() {
    this.ticketService.currentTicket = {
      id: 100,
      userId: 0,
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
    this.routerService.navigateToTicketEdit();
  }
}
