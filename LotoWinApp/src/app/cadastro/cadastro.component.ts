import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { ActivatedRoute } from '@angular/router';
import { ApostaService } from '../services/aposta.service';
import { Aposta } from '../models/Aposta';
import { DateFormatPipePipe } from '../helper/dateFormatPipe.pipe';
import { Jogo } from '../models/Jogo';
import { Numero } from '../models/Numero';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  aposta: Aposta = {
    concurso: null,
    dataAposta: null,
    dataConcurso: null,
    jogos: []
  };
  dataConcurso: Date;
  dataAposta: Date;
  operacao: string;
  numeros: string;

  constructor(
    private localeService: BsLocaleService,
    private route: ActivatedRoute,
    private apostaService: ApostaService,
    private dateFormatPipe: DateFormatPipePipe) {
    this.localeService.use('pt-br');
  }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        this.GetAposta(parametros['id']);
      }
      else{
        this.operacao = 'POST';
      }
    });
  }

  GetAposta(id: number){
    this.apostaService.GetApostaPorId(id).subscribe(
      (_aposta: Aposta) => {
        this.aposta = _aposta;
        this.dataAposta = this.dateFormatPipe.transform(this.aposta.dataAposta);
        this.dataConcurso = this.dateFormatPipe.transform(this.aposta.dataConcurso);
        this.operacao = 'PUT';
      }, error => {
        console.log(error);
      }
    );
  }

  Salvar(){
    if (this.dataAposta !== this.dateFormatPipe.transform(this.aposta.dataAposta)){
      this.aposta.dataAposta = this.dataAposta;
    }
    if (this.dataConcurso !== this.dateFormatPipe.transform(this.aposta.dataConcurso)){
      this.aposta.dataConcurso = this.dataConcurso;
    }
    if (this.operacao === 'POST'){
      this.AddAposta();
    }
    else{
      this.EditarAposta();
    }
  }

  AddAposta(){
    this.apostaService.PostAposta(this.aposta).subscribe(
      (_aposta: Aposta) => {
        this.aposta = _aposta;
        this.operacao = 'PUT';
        alert("Aposta salva com sucesso!");
      }, error => {
        alert("Falha ao cadastra aposta!");
      }
    );
  }

  EditarAposta(){
    this.apostaService.PutAposta(this.aposta).subscribe(
      (_aposta: Aposta) => {
        alert("Aposta alterada com sucesso!");
      }, error => {
        alert("Falha ao alterar aposta!");
      }
    );
  }

  DeleteJogo(index: number){
    this.aposta.jogos.splice(index, 1);
  }

  AddJogo(){
    let _jogo: Jogo ={
      premiado: false,
      numeros:[]
    };

    const listaNumeros = this.numeros.trim().split(/\s*-\s*/);

    if (listaNumeros.length !== 6){
      alert('Cadastro permitido apenas para seis número!');
    }
    else{
      listaNumeros.forEach((item) => {
        let num: Numero = {
          valor: parseInt(item)
        };
        _jogo.numeros.push(num);
      });
      this.aposta.jogos.push(_jogo);
    }
  }
}
