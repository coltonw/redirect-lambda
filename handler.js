"use strict";

module.exports.redirect = async () => {
  return {
    statusCode: 307,
    headers: {
      Location: "https://cra.willcolton.com/",
    },
  };
};
