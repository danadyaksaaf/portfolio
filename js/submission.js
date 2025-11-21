document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('submitButton');
  if (!form || !btn) return;

  // Prevent any accidental native submission
  form.addEventListener('submit', (e) => e.preventDefault());

  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    // Validate form using browser native validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';

    const url = form.action;
    const data = new FormData(form);

    try {
      // use no-cors to avoid the browser navigating to the Apps Script response page
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      // always redirect to local success page
      window.location.href = './success.html';
    } catch (err) {
      // still redirect to success page on error to show local confirmation
      alert('Check your connection!');
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
});