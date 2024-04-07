// script.js

$(document).ready(function() {
    // Fetch todos from server
    $.get('/todos', function(data) {
      data.forEach(function(todo, index) {
        $('#todoList').append(`<li>${todo} <button class="delete" data-id="${index}">Delete</button></li>`);
      });
    });
  
    // Handle form submission
    $('#todoForm').submit(function(event) {
      event.preventDefault();
      const todo = $('#todoInput').val();
      $.post('/todos', { todo: todo }, function() {
        $('#todoList').append(`<li>${todo} <button class="delete" data-id="${todos.length - 1}">Delete</button></li>`);
        $('#todoInput').val('');
      });
    });
  
    // Handle delete button click
    $(document).on('click', '.delete', function() {
      const id = $(this).data('id');
      $.ajax({
        url: `/todos/${id}`,
        type: 'DELETE',
        success: function() {
          $(this).parent().remove();
        }.bind(this)
      });
    });
  });
  