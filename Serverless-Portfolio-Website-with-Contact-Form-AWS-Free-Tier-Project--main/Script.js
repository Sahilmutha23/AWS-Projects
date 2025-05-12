document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const responseElem = document.getElementById('form-response');
  responseElem.textContent = "Sending...";

  try {
    const res = await fetch('https://vqg6kkmdb4.execute-api.us-east-1.amazonaws.com/Contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (res.ok) {
      responseElem.textContent = "✅ Message sent!";
      form.reset();
    } else {
      responseElem.textContent = `❌ ${result.error || "Error sending message."}`;
    }
  } catch (err) {
    responseElem.textContent = "❌ Something went wrong.";
  }
});
