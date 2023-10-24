const useScroll = (section: "hero" | "about" | "work" | "contact") => {
  const el = document.getElementById(`${section}`);
  const y = el!.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export default useScroll;
