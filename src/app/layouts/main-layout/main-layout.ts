import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Footer } from '../footer/footer';
import { Navbar } from "../navbar/navbar";
import { LoadingComponent } from "../../features/loading/loading/loading";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Footer, Navbar, LoadingComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
