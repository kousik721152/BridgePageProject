const phonepeLink = document.getElementById('phonepe-link');
phonepeLink.addEventListener('click', (event) => {
  window.location = phonepeLink.href; // Try deep link
  setTimeout(() => {
    window.location = "https://play.google.com/store/apps/details?id=com.phonepe.app"; // PhonePe Play Store link
  }, 25);
});

// Repeat similar code for Paytm, GPay, CRED
const paytmLink = document.getElementById('paytm-link');
paytmLink.addEventListener('click', (event) => {
  window.location = paytmLink.href;
  setTimeout(() => {
    window.location = "https://play.google.com/store/apps/details?id=net.one97.paytm";
  }, 25);
});

const gpayLink = document.getElementById('gpay-link');
gpayLink.addEventListener('click', (event) => {
  window.location = gpayLink.href;
  setTimeout(() => {
    window.location = "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user";
  }, 25);
});

const credLink = document.getElementById('cred-link');
credLink.addEventListener('click', (event) => {
  window.location = credLink.href;
  setTimeout(() => {
    window.location = "https://play.google.com/store/apps/details?id=club.cred";
  }, 25);
});
