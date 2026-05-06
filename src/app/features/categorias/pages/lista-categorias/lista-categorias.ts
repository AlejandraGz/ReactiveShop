import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../../models/categoria.model';
import { CommonModule } from '@angular/common';
import { Data } from '../../../../core/services/data';
import { Observable } from 'rxjs';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-lista-categorias',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-categorias.html',
  styleUrl: './lista-categorias.css',
})
export class ListaCategorias implements OnInit{
  constructor(private dataService: Data) {}
  categorias$!: Observable<Categoria[]>;
 
  ngOnInit(): void {
    this.categorias$ = this.dataService.getCategorias();
  }
  
  slugify = (text: string) => text
  .toLowerCase()
  .replace(/ /g, '-')
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");
}
