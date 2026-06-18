import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../../models/categoria.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from "@angular/router";
import { CategoriaService } from '../../services/categoria';

@Component({
  selector: 'app-lista-categorias',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-categorias.html',
  styleUrl: './lista-categorias.css',
})
export class ListaCategorias implements OnInit{
  constructor(private CategoriaService: CategoriaService) {}
  categorias$!: Observable<Categoria[]>;
 
  ngOnInit(): void {
    this.categorias$ = this.CategoriaService.getCategorias();
  }
  
  slugify = (text: string) => text
  .toLowerCase()
  .replace(/ /g, '-')
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");
}
