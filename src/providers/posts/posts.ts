import { Injectable } from '@angular/core';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {

  posts: any = [];

  constructor() {
  }

  load(): void{
    this.posts = [
      {title: 'Olá', summary:'alguma coisa'},
      {title: 'Oi', summary:'outra coisa'},
      {title: 'Hello', summary:'something'}
    ]
  }

}
