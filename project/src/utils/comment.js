export const updateCommentToClient = (comment) => {
  const updatedComment = Object.assign(
    {},
    comment,
    {
      user: {
        avatarUrl: comment.user['avatar_url'],
        id: comment.user.id,
        isPro: comment.user['is_pro'],
        name: comment.user.name,
      }
    }
  );

  return updatedComment;
}
