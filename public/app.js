document.addEventListener("click", (event) => {
  const { type, id } = event.target.dataset;
  if (type === "remove") {
    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  }
  if (type === "update") {
    const title = prompt();
    if (title?.length > 0) {
      update({ id, title }).then(() => {
        event.target.closest("li").firstElementChild.textContent = title;
      });
    }
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}
async function update({ id, title }) {
  await fetch(`/${id}/${title}`, { method: "PUT" });
}
