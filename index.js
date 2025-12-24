const post = {
    title: 'My post',
    likes: 5
  };
  
  // Объект → JSON (строка)
  const postString = JSON.stringify(post);
  console.log(postString); // {"title":"My post","likes":5}
  
  // JSON → объект
  const parsedPost = JSON.parse(postString);
  console.log(parsedPost.title); // 'My post'
