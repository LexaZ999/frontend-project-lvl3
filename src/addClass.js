const addClass = (elem, ...classes) => {
  classes.forEach((className) => {
    elem.classList.add(className);
  });
};

export default addClass;
