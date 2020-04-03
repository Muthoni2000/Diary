export class Diary {

    showContent:boolean;
    constructor(public id: number, public title: string, public content:string, public type:string,
      public date:Date){
        this.showContent = false;
  
    }
  }