/* eslint-disable camelcase */
/* eslint-disable new-cap */

import { DM_Mono, Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const mono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
});
