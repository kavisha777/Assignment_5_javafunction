// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// 2. Toggle Navigation (for mobile)
const toggleButton = document.createElement('button');
toggleButton.textContent = '☰';
toggleButton.classList.add('md:hidden', 'text-blue-900', 'p-2');
const nav = document.querySelector('nav div');
nav.insertBefore(toggleButton, nav.firstChild);

toggleButton.addEventListener('click', () => {
  const navLinks = document.querySelector('nav div div');
  navLinks.classList.toggle('hidden');
});

// 3. Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('fixed', 'bottom-5', 'right-5', 'bg-red-900', 'text-white', 'p-3', 'rounded-full', 'hidden');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.add('hidden');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. Hover Effects on Icons
const socialIcons = document.querySelectorAll('.fab, .fa');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2)';
    icon.style.transition = 'transform 0.3s';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  });
});

// 5. Show More Button in About Us Section
const showMoreBtn = document.createElement('button');
showMoreBtn.textContent = 'Show More';
showMoreBtn.classList.add('bg-red-900', 'text-white', 'px-4', 'py-2', 'rounded', 'mt-4');
document.querySelector('#lawfirm div div').appendChild(showMoreBtn);

const extraContent = document.createElement('p');
extraContent.textContent = 'More details about our law firm...';
extraContent.classList.add('text-gray-600', 'text-xl', 'hidden');
document.querySelector('#lawfirm div div').appendChild(extraContent);

showMoreBtn.addEventListener('click', () => {
  extraContent.classList.toggle('hidden');
  showMoreBtn.textContent = extraContent.classList.contains('hidden') ? 'Show More' : 'Show Less';
});


function toggleTheme() {
  const body = document.body;
  const html = document.documentElement;
  const toggleBtn = document.getElementById("themeToggleBtn");
  const icon = document.getElementById("themeIcon");

  const isDark = body.classList.contains('dark');

  if (isDark) {
      // Switch to light
      body.classList.remove('dark');
      html.classList.remove('dark');
      body.classList.add('light');
      html.classList.add('light');
      body.classList.remove('bg-gray-900', 'text-white');
      body.classList.add('bg-gray-100', 'text-blue-900');

      // Set moon icon
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />`; // Moon
  } else {
      // Switch to dark
      body.classList.remove('light');
      html.classList.remove('light');
      body.classList.add('dark');
      html.classList.add('dark');
      body.classList.remove('bg-gray-100', 'text-blue-900');
      body.classList.add('bg-gray-900', 'text-white');

      // Set sun icon
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 6.93l-.71-.71M6.34 6.34l-.71-.71m12.02 0l-.71.71M6.34 17.66l-.71.71M12 5a7 7 0 100 14 7 7 0 000-14z" />`; // Sun
  }
}


