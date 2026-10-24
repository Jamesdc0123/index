window.onload = function() {
   
    localStorage.clear();
    sessionStorage.clear();
    
    if (document.getElementById('index')) {
        document.getElementById('index').reset();
    }
};
window.addEventListener('secondary', () => {
    localStorage.removeItem('myCustomDomState');
  });

  self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
      );
    }
  });