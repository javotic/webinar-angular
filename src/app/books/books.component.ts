import { Component, inject, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  private bookService = inject(BookServiceService);

  libros : any[] = [];

  ngOnInit() : void{
    this.bookService.list().subscribe((libros:any) => {
      this.libros = libros;
      console.table(libros);
    });
  }

}
