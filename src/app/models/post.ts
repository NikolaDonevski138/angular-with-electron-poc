export class Post {
    id: string;
    title: string;
    body: string;
    userId: string;

    constructor(id:string,title:string,body:string,userId:string){
        this.id = id;
        this.title = title;
        this.body = body;
        this.userId = userId
    }
}