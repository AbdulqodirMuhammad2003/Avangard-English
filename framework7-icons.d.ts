// framework7-icons o'z tiplarini bermaydi — komponentlar oddiy <svg> qaytaradi.
declare module "framework7-icons/react/esm/*.js" {
  import type { ComponentType, SVGProps } from "react";
  const Icon: ComponentType<SVGProps<SVGSVGElement>>;
  export default Icon;
}
