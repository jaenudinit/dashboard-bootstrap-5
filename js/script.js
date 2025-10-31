const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");
const toggleBtn = document.getElementById("toggleSidebar");

// check semua get element by Id, karena tidak semua halaman punya elemen tersebut
if (sidebar && mainContent && toggleBtn) {
    // Sidebar toggle functionality

    toggleBtn.addEventListener("click", () => {
        if (window.innerWidth < 992) {
            sidebar.classList.toggle("show");
            sidebar.classList.remove("collapsed");
            mainContent.classList.remove("collapsed");
        } else {
            sidebar.classList.toggle("collapsed");
            mainContent.classList.toggle("collapsed");
        }
    });

    sidebar.addEventListener("mouseenter", () => {
        if (window.innerWidth >= 992 && sidebar.classList.contains("collapsed")) {
            sidebar.classList.add("hover-expand");
            sidebar.classList.remove("collapsed");
        }
    });

    sidebar.addEventListener("mouseleave", () => {
        if (window.innerWidth >= 992 && sidebar.classList.contains("hover-expand")) {
            sidebar.classList.add("collapsed");
            sidebar.classList.remove("hover-expand");
        }
    });

    document.addEventListener("click", (e) => {
        if (
            window.innerWidth < 992 &&
            !sidebar.contains(e.target) &&
            !toggleBtn.contains(e.target)
        ) {
            sidebar.classList.remove("show");
        }
    });
}

// Fullscreen toggle
const fullscreenBtn = document.getElementById("btnFullscreen");
if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            fullscreenBtn.classList.replace(
                "bi-arrows-fullscreen",
                "bi-fullscreen-exit"
            );
        } else {
            document.exitFullscreen();
            fullscreenBtn.classList.replace(
                "bi-fullscreen-exit",
                "bi-arrows-fullscreen"
            );
        }
    });
}

// Card Accordion and Fullscreen Toggle
document.querySelectorAll(".toggle-collapse").forEach(btn => {
    btn.addEventListener("click", function () {
        const icon = this.querySelector("i");
        const targetId = this.getAttribute("data-bs-target");
        const target = document.querySelector(targetId);
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(target);

        target.addEventListener("shown.bs.collapse", () => {
            icon.classList.remove("bi-arrows-expand");
            icon.classList.add("bi-arrows-collapse");
        });
        target.addEventListener("hidden.bs.collapse", () => {
            icon.classList.remove("bi-arrows-collapse");
            icon.classList.add("bi-arrows-expand");
        });
    });
});

// EXPAND TOGGLE FULLSCREEN
document.querySelectorAll(".toggle-expand").forEach(btn => {
    btn.addEventListener("click", function () {
        const card = this.closest(".card");
        const icon = this.querySelector("i");

        card.classList.toggle("fullscreen-card");

        if (card.classList.contains("fullscreen-card")) {
            icon.classList.remove("bi-arrows-angle-expand");
            icon.classList.add("bi-arrows-angle-contract");
        } else {
            icon.classList.remove("bi-arrows-angle-contract");
            icon.classList.add("bi-arrows-angle-expand");
        }
    });
});