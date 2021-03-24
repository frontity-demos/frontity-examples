import useInView from "@frontity/hooks/use-in-view";

const LazyImage = ({ src }) => {
  // Get the reference and the visibility status.
  const { ref, inView } = useInView({ triggerOnce: true });

  // Pass the reference to the container and render `children` if
  // the container is visible, or a placeholder otherwise.
  return <img ref={ref}>{inView ? children : <p>Still not visible...</p>}</div>;
};

export default LazyElement