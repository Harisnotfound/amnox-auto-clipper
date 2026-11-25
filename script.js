document.getElementById("year").textContent=new Date().getFullYear();
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
const lightbox=document.querySelector(".lightbox"),lightboxImg=lightbox.querySelector("img");
document.querySelectorAll(".gallery-item").forEach(item=>item.addEventListener("click",()=>{lightboxImg.src=item.dataset.full;lightboxImg.alt=item.querySelector("img").alt;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");}));
function closeLightbox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");lightboxImg.src="";}
lightbox.querySelector(".lightbox-close").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox();});


// EDIT THIS URL after uploading the installer to GitHub Releases.
// Keep the exact filename and repository URL used by your release.
const DOWNLOAD_URL = "https://github.com/Harisnotfound/amnox-auto-clipper/releases/latest/download/AmnoxAutoClipper-Setup-1.0.0.exe";
const downloadButton = document.getElementById("download-button");
const downloadHint = document.getElementById("download-hint");
if (downloadButton && DOWNLOAD_URL.startsWith("https://")) {
  downloadButton.href = DOWNLOAD_URL;
  downloadButton.removeAttribute("aria-disabled");
  downloadButton.textContent = "Download for Windows ↓";
  downloadHint.textContent = "Windows installer · Download hosted on GitHub Releases.";
}

// Prepare a different purchase message for each plan and contact channel.
const INSTAGRAM_URL = "https://ig.me/m/amnoxautocliper";
const CONTACT_EMAIL = "amnoxinfo@gmail.com";
function purchaseMessage(plan) {
  const messages = {
    "Weekly": "Hello Amnox! I would like to purchase the $3/week Amnox Auto Clipper subscription. Please share the payment and activation details.",
    "Monthly": "Hello Amnox! I am interested in the $10/month Amnox Auto Clipper subscription. Please share the payment and activation details.",
    "Lifetime": "Hello Amnox! I would like to purchase the $25 lifetime Amnox Auto Clipper license. Please share the payment and activation details.",
    "General enquiry": "Hello Amnox! I have a question about Amnox Auto Clipper. Please get back to me with more information."
  };
  return messages[plan] || messages["General enquiry"];
}
function emailLink(plan) {
  const subject = plan === "General enquiry" ? "Amnox Auto Clipper enquiry" : `Amnox Auto Clipper - ${plan} plan`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(purchaseMessage(plan))}`;
}
document.querySelectorAll(".purchase-contact, .contact-message").forEach(button => {
  const plan = button.dataset.plan || "General enquiry";
  const channel = button.dataset.channel;
  if (channel === "email") {
    button.href = emailLink(plan);
  } else if (channel === "instagram") {
    // Instagram may not honor prefilled text on every device/account.
    // The message is also copied so the visitor can paste it into the DM.
    button.href = `${INSTAGRAM_URL}?text=${encodeURIComponent(purchaseMessage(plan))}`;
    button.addEventListener("click", () => {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(purchaseMessage(plan)).catch(() => {});
      }
    });
  }
});
