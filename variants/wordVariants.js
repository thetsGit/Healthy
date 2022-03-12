const wordVariants = {
    initial: {
      opacity: 0,
      y: 100
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  }

  export default wordVariants;