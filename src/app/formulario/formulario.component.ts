import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
},
)
export class FormularioComponent {

  nome: string = '';
  cpf: string = '';
  dataNascimento: string = '';

  @Output() clienteAdicionado = new EventEmitter<any>();

  adicionarCliente() {
    const cliente = {
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento
    };
    this.clienteAdicionado.emit(cliente);
    this.limparCampos();
  }

  limparCampos() {
    this.nome = '';
    this.cpf = '';
    this.dataNascimento = '';
  }

}
