"use strict";

module.exports.redirect = async () => {
  return {
    statusCode: 307,
    headers: {
      Location: "https://svelte.willcolton.com/",
    },
  };
};
