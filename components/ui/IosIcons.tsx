/**
 * iPhone (iOS / SF Symbols) uslubidagi belgilar — Framework7 Icons (MIT).
 * Apple'ning o'z SF Symbols'i faqat Apple platformalarida ishlatilishi
 * mumkin, shuning uchun saytda shu uslubda chizilgan ochiq to'plam olingan.
 *
 * lucide-react bilan bir xil `size` prop: <StarFill size={20} />.
 */
import type { ComponentType, CSSProperties, SVGProps } from "react";
import ArrowCounterclockwiseRaw from "framework7-icons/react/esm/ArrowCounterclockwise.js";
import ArrowRightRaw from "framework7-icons/react/esm/ArrowRight.js";
import BookFillRaw from "framework7-icons/react/esm/BookFill.js";
import CheckmarkAltRaw from "framework7-icons/react/esm/CheckmarkAlt.js";
import DeleteLeftFillRaw from "framework7-icons/react/esm/DeleteLeftFill.js";
import EyeFillRaw from "framework7-icons/react/esm/EyeFill.js";
import InfoCircleFillRaw from "framework7-icons/react/esm/InfoCircleFill.js";
import LightbulbFillRaw from "framework7-icons/react/esm/LightbulbFill.js";
import LocationFillRaw from "framework7-icons/react/esm/LocationFill.js";
import MicFillRaw from "framework7-icons/react/esm/MicFill.js";
import RosetteRaw from "framework7-icons/react/esm/Rosette.js";
import Speaker2FillRaw from "framework7-icons/react/esm/Speaker2Fill.js";
import StarFillRaw from "framework7-icons/react/esm/StarFill.js";
import TortoiseFillRaw from "framework7-icons/react/esm/TortoiseFill.js";
import XmarkRaw from "framework7-icons/react/esm/Xmark.js";

type IconProps = { size?: number; className?: string; style?: CSSProperties };

function wrap(Raw: ComponentType<SVGProps<SVGSVGElement>>, name: string) {
  function Icon({ size = 20, className, style }: IconProps) {
    return <Raw width={size} height={size} className={className} style={style} aria-hidden="true" focusable="false" />;
  }
  Icon.displayName = name;
  return Icon;
}

export const ArrowCounterclockwise = wrap(ArrowCounterclockwiseRaw, "ArrowCounterclockwise");
export const ArrowRight = wrap(ArrowRightRaw, "ArrowRight");
export const BookFill = wrap(BookFillRaw, "BookFill");
export const Checkmark = wrap(CheckmarkAltRaw, "Checkmark");
export const DeleteLeftFill = wrap(DeleteLeftFillRaw, "DeleteLeftFill");
export const EyeFill = wrap(EyeFillRaw, "EyeFill");
export const InfoCircleFill = wrap(InfoCircleFillRaw, "InfoCircleFill");
export const LightbulbFill = wrap(LightbulbFillRaw, "LightbulbFill");
export const LocationFill = wrap(LocationFillRaw, "LocationFill");
export const MicFill = wrap(MicFillRaw, "MicFill");
export const Rosette = wrap(RosetteRaw, "Rosette");
export const Speaker2Fill = wrap(Speaker2FillRaw, "Speaker2Fill");
export const StarFill = wrap(StarFillRaw, "StarFill");
export const TortoiseFill = wrap(TortoiseFillRaw, "TortoiseFill");
export const Xmark = wrap(XmarkRaw, "Xmark");
