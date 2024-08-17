import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./formulario/formulario.component";
import { ListaComponent } from "./lista/lista.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'avaliacao-angular';
  clientes: any[] = [];

  adicionarCliente(cliente: any) {
    this.clientes.push(cliente);
  }
}
