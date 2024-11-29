import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-escalation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-escalation.component.html',
  styleUrls: ['./ticket-escalation.component.css'],
})
export class TicketEscalationComponent {
  // List of contacts with names and emails
  emailList = [
    { name: 'Sales Department', email: 'management@example.com' },
    { name: 'Finance Department', email: 'hr@example.com' },
    { name: 'IT Department', email: 'it@example.com' },
    { name: 'Upper Management(CEO)', email: 'sales@example.com' },
  ];
  selectedEmail = this.emailList[0].email; // Default selected email
  emailTitle = ''; // User's email title
  emailContent = ''; // User's email content

  constructor(private router: Router) {}

  /**
   * Navigate back to the main page
   */
  goToHome(): void {
    console.log('Navigating to Home...');
    this.router.navigate(['/main']); // Replace '/main' with the correct route to your main page
  }

  /**
   * Handle the send button click
   */
  sendEmail(): void {
    if (this.emailTitle.trim() === '' || this.emailContent.trim() === '') {
      alert('Please fill out the email title and content.');
      return;
    }

    console.log('Sending email to:', this.selectedEmail);
    console.log('Email Title:', this.emailTitle);
    console.log('Email Content:', this.emailContent);

    alert(
      `Email sent to ${this.selectedEmail} with title "${this.emailTitle}".`
    );
    // Reset the form after sending
    this.emailTitle = '';
    this.emailContent = '';
    this.selectedEmail = this.emailList[0].email;
  }
}
