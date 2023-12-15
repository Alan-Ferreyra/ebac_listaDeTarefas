$("form").on("submit", function (e) {
  e.preventDefault();

  const NovaTarefa = $(`#nome-tarefa`).val();

  $(`<li>${NovaTarefa}</li>`).appendTo("ul");

  $(document).ready(function () {
    $("ul").on("click", "li", function () {
      $(this).toggleClass("completed");
    });

    $(`#nome-tarefa`).val("");
  });
});
