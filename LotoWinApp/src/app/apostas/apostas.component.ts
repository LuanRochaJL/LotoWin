import { Component, OnInit } from '@angular/core';
import { Aposta } from '../models/Aposta';
import { ApostaService } from '../services/aposta.service';

@Component({
  selector: 'app-apostas',
  templateUrl: './apostas.component.html',
  styleUrls: ['./apostas.component.css']
})
export class ApostasComponent implements OnInit {

  apostas: Aposta[];
  apostas2: any = [];
  apostasfiltrada: Aposta[];
  private _filtro: string;
  get filtro(): string{
    return this._filtro;
  }
  set filtro(value: string){
    this._filtro = value;
    this.apostasfiltrada = this._filtro ? this.FiltrarApostas(this._filtro) : this.apostas;
  }

  constructor(private apostaService: ApostaService) { }

  ngOnInit() {
    this.GetApostas();
  }

  FiltrarApostas(filtro: string): Aposta[]{
    return this.apostas.filter(
      aposta => aposta.concurso.indexOf(filtro) !== -1
    )
  }

  GetApostas(){
    this.apostaService.GetApostas().subscribe(
      (_apostas: Aposta[]) => {
        this.apostas = _apostas;
        this.apostasfiltrada = _apostas;
      }, error => {
        console.log(error);
      }
    );
  }

  DeleteAposta(id: number){
    this.apostaService.DeleteAposta(id).subscribe(
      () => {
          this.GetApostas();
        }, error => {
          console.log(error);
        }
    );
  }
}
