class Posts {
  id: number;
  userId: number;
  body: string;
  title: string;

  constructor(id: number, userId: number, body: string, title: string) {
    this.id = id;
    this.userId = userId;
    this.body = body;
    this.title = title;
  }
}

export default Posts;
