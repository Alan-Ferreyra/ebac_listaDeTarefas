$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const NovaTarefa = $(`#nome-tarefa`).val();

    $(`<li>${NovaTarefa}</li>`).appendTo("ul");

    $(`#nome-tarefa`).val("");
  });

  $("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
  });
});
