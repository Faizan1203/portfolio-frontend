interface LoaderProps {
  load: boolean;
}

function Loader({ load }: LoaderProps) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
};

export default Loader;
