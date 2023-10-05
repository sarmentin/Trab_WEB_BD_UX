// Get all the delete buttons
const deleteButtons = document.querySelectorAll(".btn-excluir");

// Add event listener to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the closest post element
    const post = button.closest(".postagem");

    // Remove the post element from the DOM
    post.remove();
  });
});
