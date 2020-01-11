export default function smoothScroll (height) {
    window.scrollTo({
      left: 0,
      top: height,
      behavior: 'smooth',
    })
  }