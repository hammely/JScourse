const userInfo = ({ name, commentQuantity }) => {
    if (!commentQuantity) return `User ${name} has no comments`; // Нет комментариев
    return `User ${name} has ${commentQuantity} comments`;
  };
  const profile = { name: "Лиза", commentQuantity: 100 };
  console.log(userInfo(profile));
