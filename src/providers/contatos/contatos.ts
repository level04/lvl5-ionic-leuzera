import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContatosProvider {

  contato: any = [];

  constructor() {
  }

  load(): void{
    this.contato = [
      {name: 'Leonardo', email:'leonardo@level5jr.com.br'},
      {name: 'Arthu', email:'arthur@level5jr.com.br'},
      {name: 'Erik', email:'erik@level5jr.com.br'},
      {name: 'Weverton', email:'weverton@level5jr.com.br'},
      {name: 'Thiago', email:'thiago@level5jr.com.br'},
      {name: 'Pedro', email:'pedro@level5jr.com.br'},
      {name: 'Messias', email:'messias@level5jr.com.br'}
    ]
  }

  create(contato) :void{}

  getContato(id) : void{}

}
