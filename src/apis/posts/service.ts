export class PostService {
  private _posts = [
    // 100 posts
    {
      id: 1,
      title: "Post 1",
      content: "Post 1 content",
    },
    {
      id: 2,
      title: "Post 2",
      content: "Post 2 content",
    },
    {
      id: 3,
      title: "Post 3",
      content: "Post 3 content",
    },
    {
      id: 4,
      title: "Post 4",
      content: "Post 4 content",
    },
    {
      id: 5,
      title: "Post 5",
      content: "Post 5 content",
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
