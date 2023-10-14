import { Component, HostListener } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { v4 as uuidv4 } from 'uuid';
import { UnknownUserService } from './services/unknown-user.service';
import { UsersService } from './services/users.service';
import { UsagesService } from './services/usages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GrammifyFront';
  isDisplayNavBar = true;

  constructor(private router: Router, private unknownUserService: UnknownUserService, private usagesService: UsagesService, private usersService: UsersService) {
    // Check all changement route
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Undisplay navbar if /login or /signup route
        if (this.router.url.startsWith('/login') || this.router.url.startsWith('/signup')) {
          this.isDisplayNavBar = false
        } else {
          this.isDisplayNavBar = true
        }
      }
    });
  }

  generateUuid() {
    return uuidv4();
  }

  async ngOnInit(): Promise<void> {
    initFlowbite();

    // === Init Unknwown User ===
    const unknownUserId = localStorage.getItem('unknownId');
    const userId = localStorage.getItem('userId')

    // = Check if userId localStorage exist =
    if (userId) {
      this.usersService.setUserId(userId)
      this.unknownUserService.setUnknownUserId(unknownUserId)
      
      let nbUsages = await this.usersService.getUserUsages(userId)

      if (nbUsages == -1) {
        this.router.navigate(['/login'])
      } else {
        this.usagesService.setUsages(nbUsages)
      }
    } else {
      // = Check if unknownId localstorage exist =
      if (unknownUserId) {
        this.unknownUserService.setUnknownUserId(unknownUserId)
  
        let nbUsages = await this.unknownUserService.getUsageUnknownUser(unknownUserId)
  
        if (nbUsages == -1) {
          this.router.navigate(['/login'])
        } else {
          this.usagesService.setUsages(nbUsages)
        }
      } else {
        const newUnknownUserId = this.generateUuid();
        localStorage.setItem('unknownId', newUnknownUserId);
  
        this.unknownUserService.setUnknownUserId(newUnknownUserId)
        this.unknownUserService.createUnknownUser(newUnknownUserId)
      }
    }
  }

  // Set id local storage if user edit the id in localStorage
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent): void {
    if (localStorage.getItem('userId') != this.usersService.getUserId()) {
      localStorage.setItem('userId', this.usersService.getUserId());
    }

    if (localStorage.getItem('unknownId') != this.unknownUserService.getUnknownUserId()) {
      localStorage.setItem('unknownId', this.unknownUserService.getUnknownUserId());
    }
  }  
}
