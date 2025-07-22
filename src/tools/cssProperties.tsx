import { CSSProperties } from "react";

export const centeredBgImage = (url: string): CSSProperties  => {
    return {
        background: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
}