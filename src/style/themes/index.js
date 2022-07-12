// @flow

import * as React from "react";
import * as colors from "../colors";

const common = {
  dark: {
    background: colors.darkPurple,
    text: colors.beige,
  },
  light: {
    background: colors.beige,
    text: colors.darkPurple,
  },
};

export const global = {
  primary: colors.yellow,
  accent: colors.darkPurple,
  borderColor: colors.dawnPink,
  background: colors.almostWhite,
  backgroundDesktop: colors.beige,
  ...common,
};

export const hire = {
  primary: colors.orange,
  accent: colors.white,
  borderColor: colors.dawnPink,
  background: colors.almostWhite,
  backgroundDesktop: colors.almostWhite,
  ...common,
};

export const plan = {
  primary: colors.violet,
  accent: colors.white,
  borderColor: colors.almond,
  background: colors.beige,
  backgroundDesktop: colors.beige,
  ...common,
};

export const track = {
  primary: colors.pink,
  accent: colors.white,
  borderColor: colors.almond,
  background: colors.beige,
  backgroundDesktop: colors.beige,
  ...common,
};

export const themes = {
  global: { ...global },
  hire: { ...hire },
  track: { ...track },
  plan: { ...plan },
};
