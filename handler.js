"use strict";

module.exports.redirect = async () => {
  return {
    statusCode: 307,
    Headers: {
      Location: "https://cra.willcolton.com/",
    },
  };
};
