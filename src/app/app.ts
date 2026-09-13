import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { StickyContact } from './layout/sticky-contact/sticky-contact';

@Component({
  imports: [RouterOutlet, Header, Footer, StickyContact],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
