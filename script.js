document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Alert kirim form
document.querySelector("form")?.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload
    alert("Terima kasih! Pesan Anda telah terkirim.");
    this.reset(); // Mengosongkan form
});
