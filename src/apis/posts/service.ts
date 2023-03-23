export class PostService {
  private _posts = [
    // 100 posts
    {
      id: 1,
      title: "Post 1",
      content: "Post 1 content",
    },
  ];

  getPosts() {
    return this._posts;
  }

  getPost(id: number) {
    return this._posts.find((post) => post.id === id);
  }
}

export default new PostService();
