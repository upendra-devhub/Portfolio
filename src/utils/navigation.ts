export const navigate = (to: string) => {
  if (to.startsWith('/#')) {
    const hash = to.substring(1); // e.g. "#about"
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/' + hash);
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        const id = hash.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.hash = hash;
      const id = hash.replace('#', '');
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
    return;
  }

  if (to === '/' && window.location.pathname !== '/') {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
