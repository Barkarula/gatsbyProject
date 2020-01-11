import "./src/styles/main.sass"

export const onClientEntry = async () => {
    if (typeof IntersectionObserver === `undefined`) {
      await import(`intersection-observer`);
    }
}