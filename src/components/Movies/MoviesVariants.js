export const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const layoutVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "linear",
    },
  },
  exit: {
    opacity: 0,
  },
};
