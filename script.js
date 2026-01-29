function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (email) {
    message.textContent = "Thank you! We’ll notify you when we launch ☕";
    document.getElementById("email").value = "";
  }
}
