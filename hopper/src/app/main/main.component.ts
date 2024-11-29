import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import { TicketService } from '../services/ticket.service';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../services/ticket.model';
import { User } from '../services/user.model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  routerService = inject(RouterService);
  ticketService = inject(TicketService);
  userService = inject(UserService);

  filteredTickets: Ticket[] = []; // Tickets filtered based on user type
  currentUser: User | null = null; // Current logged-in user

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUserAndTickets();
  }

  /**
   * Load user and filter tickets based on their type
   */
  loadUserAndTickets(): void {
    // Fetch the current user
    this.currentUser = this.userService.getLoggedInUser();

    if (!this.currentUser) {
      console.error('No user is logged in.');
      return;
    }

    if (this.currentUser.userType === 'admin') {
      // Admin sees all tickets
      this.filteredTickets = [...this.ticketService['tickets']];
    } else {
      // Regular users see only their open tickets
      const userId = parseInt(this.currentUser.id, 10);
      this.filteredTickets = this.ticketService.getOpenTicketsByUserId(userId);
    }
  }

  /**
   * Open the settings page
   */
  openSettings(): void {
    this.routerService.navigateToSettings();
  }

  /**
   * Edit a ticket
   */
  editTicket(ticket: Ticket): void {
    console.log('Navigating to edit page for ticket ID:', ticket.id);
    this.ticketService.currentTicket = ticket;
    this.routerService.navigateToTicketEdit();
  }

  /**
   * Delete a ticket
   */
  deleteTicket(ticketId: number): void {
    this.filteredTickets = this.filteredTickets.filter(
      (ticket) => ticket.id !== ticketId
    );
    console.log(`Ticket with ID ${ticketId} deleted.`);
  }

  /**
   * Add a new ticket
   */
  addTicket(): void {
    this.routerService.navigateToTicketCreation();
  }
}
