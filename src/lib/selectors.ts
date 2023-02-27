export const scrollToSection = (id: string) => {
  const scrollTarget = document.getElementById(id);
  if (scrollTarget) {
    scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
