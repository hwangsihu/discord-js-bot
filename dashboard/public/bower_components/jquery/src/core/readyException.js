define(["../core"], (jQuery) => {
  jQuery.readyException = (error) => {
    window.setTimeout(() => {
      throw error;
    });
  };
});
