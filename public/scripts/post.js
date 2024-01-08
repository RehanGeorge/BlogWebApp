const edit = document.querySelector(".edit");
const post = document.querySelector(".post-content");
const submitValue = document.querySelector(".hidden-text");

edit.addEventListener("click", () => {
  const postText = post.textContent;
  post.innerHTML = `<textarea>${postText}</textarea>`;

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  edit.parentNode.appendChild(submitButton);
  edit.remove();
  submitButton.addEventListener("click", () =>
    submitValue.setAttribute("value", post.querySelector("textarea").value)
  );
});
