document.getElementById('scrollDownIcon').addEventListener('click', function() {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
    window.scrollBy({
      top: viewportHeight,
      behavior: 'smooth'
    });
  });