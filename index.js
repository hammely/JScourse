const createPost = (post, createdAt = new Date()) => ({
    ...post,
    createdAt
});
const post = { id: 1, title: "News" };
console.log(createPost(post));
