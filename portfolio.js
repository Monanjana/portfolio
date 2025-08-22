document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#dropdown-toggle') && !dropdownMenu.contains(event.target)) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    });
});
document.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', () => {
      // Hide all tab contents
      document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
      
      // Remove 'active' class from all buttons
      document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));

      // Show the target content
      const target = document.querySelector(button.getAttribute('data-target'));
      target.style.display = 'block';

      // Add 'active' class to clicked button
      button.classList.add('active');
    });
  });