import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aluno: Aluno = new Aluno();
  alunoService = new AlunoService();
  alunos: Aluno[] = [];

  gravar(a: Aluno): void {
    if (this.alunoService.gravar(a)) {
      this.alunos.push(a);
      this.aluno = new Aluno()
    } else {
      this.aluno.cpf = "";
    }
  }
}
