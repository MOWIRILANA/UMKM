function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

// Tutup sidebar saat salah satu link diklik (khusus mobile)
document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth < 768) {
      sidebar.classList.remove('open');
    }
  });
});
