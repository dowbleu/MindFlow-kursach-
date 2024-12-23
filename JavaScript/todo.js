const textarea = document.getElementById('autoResizeTextarea');

textarea.addEventListener('input', function () {
  // Сбросить высоту перед изменением, чтобы корректно пересчитывать
  this.style.height = 'auto';
  // Устанавливаем новую высоту в зависимости от содержимого
  this.style.height = (this.scrollHeight) + 'px';
});