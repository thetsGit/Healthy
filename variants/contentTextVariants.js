const childVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      }
    }
  }

export default childVariants;