import Link from "next/link";
import {
  GlobeAsiaAustraliaIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

type MenuItem = {
  text: string;
  href: string;
  isBold?: boolean;
  icon?: typeof CalendarDaysIcon;
};

const menuItems: MenuItem[][] = [
  [
    { text: "Home", href: "/", isBold: true },
    { text: "New students", href: "/new-students" },
    { text: "Class descriptions", href: "/class-descriptions" },
    { text: "Booking and pricing", href: "/booking-pricing" },
    { text: "Attending class", href: "/attending" },
  ],
  [
    { text: "Our studio", href: "/studio", isBold: true },
    { text: "Our teachers", href: "/teachers" },
    { text: "Why Iyengar yoga?", href: "/why-iyengar" },
    { text: "Contact", href: "/contact" },
  ],
  [
    { text: "Timetable", href: "/timetable", isBold: true, icon: CalendarDaysIcon },
    { text: "Retreats", href: "/retreats", isBold: true, icon: GlobeAsiaAustraliaIcon },
  ],
];

export default function Menu() {
  return (
    <>
      {menuItems.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col pl-2">
          {column.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              href={item.href}
              className={`hover:text-primary-600 transition-colors ${
                item.isBold ? "font-bold" : "font-normal"
              }`}
            >
              <span className="flex items-center gap-2">
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}
