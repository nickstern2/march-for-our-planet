
//************  TRANSPARENT NAVBAR **************

const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-lewagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight - 600) {
        navbar.classList.add('navbar-lewagon-white');
      } else {
        navbar.classList.remove('navbar-lewagon-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };

// ************ END **************


const initUpdateNavbarOnScroll2 = () => {
  const navbar = document.querySelector('.navbar-science');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight - 600) {
        navbar.classList.add('navbar-lewagon-black');
      } else {
        navbar.classList.remove('navbar-lewagon-black');
      }
    });
  }
}

export { initUpdateNavbarOnScroll2 };

