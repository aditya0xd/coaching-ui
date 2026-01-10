document.addEventListener("DOMContentLoaded", () => {
  /* ---------- ELEMENTS ---------- */
  const modal = document.getElementById("appointmentModal");
  const closeBtn = document.getElementById("closeModal");
  const openButtons = document.querySelectorAll(".btn-primary, .btn-large");

  const datePicker = document.getElementById("datePicker");
  const slotsContainer = document.getElementById("timeSlots");
  const form = document.getElementById("appointmentForm");

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  /* ---------- HAMBURGER MENU ---------- */
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  }

  /* ---------- TIME SLOTS ---------- */
  let selectedSlot = null;

  const slots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM"
  ];

  const clearActiveSlots = () => {
    slotsContainer
      .querySelectorAll(".slot")
      .forEach(s => s.classList.remove("active"));
  };

  datePicker.addEventListener("change", () => {
    slotsContainer.innerHTML = "";
    selectedSlot = null;

    slots.forEach(time => {
      const slot = document.createElement("button");
      slot.type = "button";
      slot.className = "slot";
      slot.textContent = time;

      slot.addEventListener("click", () => {
        clearActiveSlots();
        slot.classList.add("active");
        selectedSlot = time;
      });

      slotsContainer.appendChild(slot);
    });
  });

  /* ---------- MODAL ---------- */
  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.add("show");

    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

    modal.addEventListener("click", e => {
    // if user clicks directly on backdrop (not the form box)
    if (e.target === modal) {
        modal.classList.remove("show");
    }
    });


  /* ---------- FORM SUBMIT ---------- */
  form.addEventListener("submit", e => {
    e.preventDefault();

    if (!selectedSlot) {
      alert("Please select a time slot");
      return;
    }

    const data = {
    name: form.querySelector('input[type="text"]').value,
    email: form.querySelector('input[type="email"]').value,
    phone: form.querySelector('input[type="tel"]').value,
    date: datePicker.value,
    time: selectedSlot,
    service: form.querySelector("select").value
    };

    emailjs.send("service_7quctin", "template_e80zpbp", data)
    .then(() => {
      alert(`✅ Appointment booked!\n\nDate: ${datePicker.value}\nTime: ${selectedSlot}`);
      form.reset();
      slotsContainer.innerHTML = "";
      selectedSlot = null;
      modal.classList.remove("show");
    })
    .catch(() => {
      alert("❌ Failed to send email. Try again.");
    });

  });
});
