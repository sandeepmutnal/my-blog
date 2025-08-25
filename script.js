function addComment(event, postId) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector("input").value;
  const comment = form.querySelector("textarea").value;

  if (name && comment) {
    const commentList = form.parentElement.querySelector(".comment-list");
    const newComment = document.createElement("p");
    newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
    commentList.appendChild(newComment);

    form.reset(); // clear form after submit
  }
}
