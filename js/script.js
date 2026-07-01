document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    document.querySelectorAll("#mobile-menu .nav-link").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  const updateNavigation = () => {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";
    document.querySelectorAll(".nav-link").forEach(link => {
      const href = link.getAttribute("href");
      const isActive = href === pageName || (pageName === "index.html" && href === "/");
      if (isActive) {
        link.classList.add("text-indigo-700", "font-bold");
        link.classList.remove("text-slate-600");
        if (link.closest("nav")) {
          link.classList.add("border-b-2", "border-indigo-700");
        }
      } else {
        link.classList.remove("text-indigo-700", "font-bold", "border-b-2", "border-indigo-700");
        link.classList.add("text-slate-600");
      }
    });
  };
  updateNavigation();

  const showToast = (message, type = "success") => {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    let bg = "bg-emerald-600 border-emerald-500";
    let icon = "&#10003;";
    if (type === "error") { bg = "bg-red-600 border-red-500"; icon = "&#10007;"; }
    else if (type === "info") { bg = "bg-blue-600 border-blue-500"; icon = "&#8505;"; }
    toast.className = `p-4 rounded-xl shadow-lg text-sm text-white font-semibold flex items-center gap-3 transition-all duration-300 transform translate-y-2 opacity-0 max-w-sm border ${bg}`;
    toast.innerHTML = `<span class="text-lg">${icon}</span><div class="flex-1">${message}</div>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove("translate-y-2", "opacity-0"), 10);
    setTimeout(() => {
      toast.classList.add("translate-y-2", "opacity-0");
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name")?.value;
      const email = document.getElementById("contact-email")?.value;
      const message = document.getElementById("contact-message")?.value;
      if (!name || !email || !message) {
        showToast("Please fill in all fields.", "error");
        return;
      }
      showToast("Thank you for your message! We will get back to you shortly.", "success");
      contactForm.reset();
    });
  }

  const applyButtons = document.querySelectorAll(".btn-apply-job");
  applyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const jobTitle = e.target.dataset.job;
      const modal = document.getElementById("apply-modal");
      const modalTitle = document.getElementById("apply-modal-title");
      if (modal && modalTitle) {
        modalTitle.textContent = `Apply for ${jobTitle}`;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    });
  });

  const closeApplyBtn = document.getElementById("btn-close-apply");
  if (closeApplyBtn) {
    closeApplyBtn.addEventListener("click", () => {
      const modal = document.getElementById("apply-modal");
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    });
  }

  const dragArea = document.getElementById("resume-drag-area");
  const fileInput = document.getElementById("resume-file-input");
  if (dragArea && fileInput) {
    dragArea.addEventListener("click", () => fileInput.click());
    dragArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      dragArea.classList.add("border-indigo-500", "bg-indigo-50/50");
    });
    dragArea.addEventListener("dragleave", () => {
      dragArea.classList.remove("border-indigo-500", "bg-indigo-50/50");
    });
    dragArea.addEventListener("drop", (e) => {
      e.preventDefault();
      dragArea.classList.remove("border-indigo-500", "bg-indigo-50/50");
      if (e.dataTransfer.files.length > 0) {
        handleResumeFile(e.dataTransfer.files[0]);
      }
    });
    fileInput.addEventListener("change", () => {
      if (fileInput.files && fileInput.files.length > 0) {
        handleResumeFile(fileInput.files[0]);
      }
    });
  }

  const handleResumeFile = (file) => {
    const container = document.getElementById("resume-upload-status");
    if (!container) return;
    container.innerHTML = `
      <div class="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-sm">
        <div class="flex items-center gap-3">
          <span class="text-2xl">&#128196;</span>
          <div>
            <p class="font-bold text-slate-800">${file.name}</p>
            <p class="text-xs text-slate-500">${(file.size / 1024).toFixed(1)} KB</p>
          </div>
        </div>
        <div class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">Ready to Submit</div>
      </div>`;
    showToast(`Resume "${file.name}" uploaded successfully!`, "success");
  };

  const jobSubmitForm = document.getElementById("job-submit-form");
  if (jobSubmitForm) {
    jobSubmitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("applicant-name")?.value;
      const email = document.getElementById("applicant-email")?.value;
      if (!name || !email) {
        showToast("Please fill in your name and email.", "error");
        return;
      }
      showToast("Application submitted successfully! Good luck!", "success");
      const modal = document.getElementById("apply-modal");
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
      jobSubmitForm.reset();
      const statusContainer = document.getElementById("resume-upload-status");
      if (statusContainer) statusContainer.innerHTML = "";
    });
  }
});
