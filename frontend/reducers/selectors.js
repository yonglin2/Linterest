import {values, toArray} from 'lodash';

export const selectAllPins = (pins) => {
  return (values(pins));
};

export const randomizeAllPins = (pins) => {
  return shuffle(values(pins));
};

function shuffle(a) {
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }

  return a;
}
