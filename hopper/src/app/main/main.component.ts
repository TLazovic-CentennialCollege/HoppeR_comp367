import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import { TicketService } from '../services/ticket.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  routerService = inject(RouterService);
  ticketService = inject(TicketService);

  //Example
  tickets = [
    { id: 1, title: 'Login Issue', details: 'Cannot log in to the portal.' },
    { id: 2, title: 'Dashboard Error', details: 'Dashboard not loading.' },
    { id: 3, title: 'Request New User', details: 'Need to create a new user.' },
  ];

  constructor(private router: Router) {}

  // Open the settings page
  openSettings(): void {
    this.routerService.navigateToSettings();
  }

  // Edit a ticket
  editTicket(ticket: any): void {
    console.log('Navigating to edit page for ticket ID:', ticket.id);
    //this.routerService.navigateToTicketEditWithId(ticket.id); // Call the method in RouterService
  }

  // Delete a ticket
  deleteTicket(ticketId: number): void {
    this.tickets = this.tickets.filter((ticket) => ticket.id !== ticketId);
    console.log(`Ticket with ID ${ticketId} deleted.`);
  }

  // Add a new ticket
  addTicket(): void {
    this.routerService.navigateToTicketCreation(); 
  }
}
