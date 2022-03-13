const templateVariants = {
    initial: {
      opacity: 0
    },
    final: {
      opacity: 1,
      transition: {
        delay: .8,
        when: "beforeChildren", 
        staggerChildren: .1
      }
    }
  }

export default templateVariants;