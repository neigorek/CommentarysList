
export class Comment {

  public  id : number;

  public userName: string;

  public commText: string;

  public Date: Date;

  constructor( name, comment, Date){


    this.userName = name;

    this.commText = comment;

    this.Date = Date;

  }

}
