document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('receiptForm');
  const receiptDisplay = document.getElementById('receiptDisplay');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect and sanitize inputs
    const salesData = DOMPurify.sanitize(document.getElementById('salesData').value.trim());
    const receiptNumber = DOMPurify.sanitize(document.getElementById('receiptNumber').value.trim());
    const description = DOMPurify.sanitize(document.getElementById('description').value.trim());
    const paymentMethod = DOMPurify.sanitize(document.getElementById('paymentMethod').value.trim());

    // Validate required fields
    if (!salesData || !receiptNumber || !description || !paymentMethod) {
      alert('⚠️ Please fill in all required fields.');
      return;
    }

    // Create formatted receipt HTML
    const receiptHTML = `
      <h2>Receipt Details</h2>
      <p><strong>Sales Data:</strong> ${salesData}</p>
      <p><strong>Receipt Number:</strong> ${receiptNumber}</p>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Payment Method:</strong> ${paymentMethod}</p>
      <hr />
      <p><em>Generated on: ${new Date().toLocaleString()}</em></p>
    `;

    // Display sanitized data
    receiptDisplay.innerHTML = receiptHTML;
    receiptDisplay.style.display = 'block';

    // Reset the form
    form.reset();
  });
});
