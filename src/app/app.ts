import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {Home} from './home/home';
import {About} from './about/about';
import {Skills} from './skills/skills';
import {Projects} from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, About, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mahta-Haghbin-portfolio');
}
