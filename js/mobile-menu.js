    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
      if (mobileMenu.style.maxHeight === '0px' || !mobileMenu.style.maxHeight) {
        mobileMenu.style.maxHeight = '40vh';
      } else {
        mobileMenu.style.maxHeight = '0px';
      }
    });

