import React, { useState } from "react";

const Star = (score: number) => {
  let newRatingStar = [];
  for (let i = 0; i < 5; i++) {
    if (i === (score - 1) / 2) {
      newRatingStar[i] = "half";
    } else if (i < score / 2) {
      newRatingStar[i] = "full";
    } else {
      newRatingStar[i] = "empty";
    }
  }
  return { newRatingStar };
};

export default Star;
