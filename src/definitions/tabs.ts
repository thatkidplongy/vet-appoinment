import {
  appointments,
  contacts,
  dataAnalytics,
  helpCenter,
  home,
  messages,
  settings,
  subscription,
} from "@/assets";

export const tabs = [
  {
    title: "Home",
    href: "/",
    tabLogo: home,
  },
  {
    title: "Appointments",
    href: "/appointments",
    tabLogo: appointments,
  },
  {
    title: "Messages",
    href: "/messages",
    tabLogo: messages,
  },
  {
    title: "Contacts",
    href: "/contacts/",
    tabLogo: contacts,
  },
  {
    title: "Data Analytics",
    href: "/data-analytics",
    tabLogo: dataAnalytics,
  },
  {
    title: "Subscription",
    href: "/subscription",
    tabLogo: subscription,
  },
  {
    title: "Help Center",
    href: "/help-center",
    tabLogo: helpCenter,
  },
  {
    title: "Settings",
    href: "/settings",
    tabLogo: settings,
  },
];
