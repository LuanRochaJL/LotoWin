import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApostasComponent } from './apostas/apostas.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: "", component: ApostasComponent},
  { path: "Aposta", component: ApostasComponent},
  { path: "Cadastro", component: CadastroComponent},
  { path: 'Cadastro/:id', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
