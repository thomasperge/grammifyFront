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
  isSmallScreen: boolean = false;

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
    // Check screen size
    this.isSmallScreen = window.innerWidth < 370;
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth < 370;
    });
  }

  generateUuid() {
    return uuidv4();
  }

  async ngOnInit(): Promise<void> {
    console.log('ON INIIIIIIT !');
    
    initFlowbite();
    
    const unknownUserId = localStorage.getItem('unknownId');
    const userId = localStorage.getItem('userId')
    
    if (userId) {
      // Load all user data
      await this.usersService.getUserData(userId)

      this.usersService.setUserId(userId)
      this.unknownUserService.setUnknownUserId(unknownUserId)
    } else {
      if (unknownUserId) {
        // Load all user data
        await this.unknownUserService.getUnknownUserData(unknownUserId)

        this.unknownUserService.setUnknownUserId(unknownUserId)
      } else {
        const newUnknownUserId = this.generateUuid();
        localStorage.setItem('unknownId', newUnknownUserId);
  
        this.unknownUserService.setUnknownUserId(newUnknownUserId)
        this.unknownUserService.createUnknownUser(newUnknownUserId)
      }
    }
  }

  // Set id local storage if user edit the id in localStorage
  // @HostListener('window:beforeunload', ['$event'])
  // onBeforeUnload(event: BeforeUnloadEvent): void {
  //   if (localStorage.getItem('userId') != this.usersService.getUserId()) {
  //     localStorage.setItem('userId', this.usersService.getUserId());
  //   }

  //   if (localStorage.getItem('unknownId') != this.unknownUserService.getUnknownUserId()) {
  //     localStorage.setItem('unknownId', this.unknownUserService.getUnknownUserId());
  //   }
  // }  
}
