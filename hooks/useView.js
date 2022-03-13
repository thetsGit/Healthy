import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useView = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({threshold: 1});
  
    useEffect(() => {
      inView ? controls.start("final") : 0;
  
    }, [controls, inView]);

    return [controls, ref];
}

export default useView;