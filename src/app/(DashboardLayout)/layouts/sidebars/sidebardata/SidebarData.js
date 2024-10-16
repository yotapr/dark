import * as Icon from "react-feather";

const SidebarData = [
  { caption: "Home" },
  {
    title: "Dashboards",
    href: "/dashboards",
    id: 1,
    //suffix: "5",
    //suffixColor: "bg-primary",
    icon: <Icon.Home />,
    collapisble: false,
    /*
    children: [
      {
        title: "Modern",
        href: "/dashboards/modern",
        icon: <Icon.Disc />,
        id: 1.1,
        collapisble: false,
      },
      {
        title: "Awesome",
        href: "/dashboards/awesome",
        icon: <Icon.Disc />,
        id: 1.2,
        collapisble: false,
      },
      {
        title: "Classy",
        href: "/dashboards/classy",
        icon: <Icon.Disc />,
        id: 1.3,
        collapisble: false,
      },
      {
        title: "Analytical",
        href: "/dashboards/analytical",
        icon: <Icon.Disc />,
        id: 1.4,
        collapisble: false,
      },
      {
        title: "Minimal",
        href: "/dashboards/minimal",
        icon: <Icon.Disc />,
        id: 1.5,
        collapisble: false,
      },
    ],*/
  },
  { caption: "Gestione azienda" },
  {
    title: "Clienti",
    href: "/apps/clients",
    icon: <Icon.User />,
    id: 2.1,
    collapisble: false,
  },
  {
    title: "Fornitori",
    href: "/apps/providers",
    icon: <Icon.Repeat />,
    id: 2.2,
    collapisble: false,
  },
  {
    title: "Offerte",
    href: "/apps/offers",
    icon: <Icon.DollarSign />,
    id: 2.3,
    collapisble: false,
  },
  {
    title: "Commesse",
    href: "/apps/offersHistory",
    icon: <Icon.DollarSign />,
    id: 2.3,
    collapisble: false,
  },
  {
    title: "Calendari",
    href: "/apps/calendar",
    icon: <Icon.Calendar />,
    id: 2.4,
    collapisble: false,
  },
  {
    title: "Venditori",
    href: "/apps/salesAgents",
    icon: <Icon.Briefcase />,
    id: 2.5,
    collapisble: false,
  },
  {
    title: "Ordini",
    href: "/apps/orders",
    icon: <Icon.ShoppingCart />,
    id: 2.6,
    collapisble: false,
  },
  {
    title: "Storico Ordini",
    href: "/apps/historyOrders",
    icon: <Icon.ShoppingCart />,
    id: 2.6,
    collapisble: false,
  },
  {
    title: "Magazzino",
    href: "/apps/products",
    icon: <Icon.File />,
    id: 2.7,
    collapisble: false,
  },/*
  {
    title: "Ecommerce",
    href: "/ecom",
    icon: <Icon.ShoppingCart />,
    id: 2.7,
    collapisble: true,
    children: [
      {
        title: "Shop",
        href: "/apps/ecom/list",
        icon: <Icon.Disc />,
      },
      {
        title: "Shop Detail",
        href: "/apps/ecom/detail",
        icon: <Icon.Disc />,
      },
    ],
  },
  {
    title: "Ticket",
    href: "/ticket",
    icon: <Icon.Bookmark />,
    id: 2.8,
    collapisble: true,
    children: [
      {
        title: "Ticket List",
        href: "/apps/ticket/list",
        icon: <Icon.Disc />,
      },
      {
        title: "Ticket Detail",
        href: "/apps/ticket/detail",
        icon: <Icon.Disc />,
      },
    ],
  },
  {
    title: "TreeView",
    href: "/apps/treeview",
    icon: <Icon.Triangle />,
    id: 2.9,
    collapisble: false,
  },
  { caption: "UI" },
  {
    title: "UI Elements",
    href: "/ui",
    id: 2,
    suffix: "22",
    suffixColor: "bg-info",
    icon: <Icon.Cpu />,
    collapisble: true,
    children: [
      {
        title: "Alert",
        href: "/ui/alerts",
        icon: <Icon.Disc />,
      },
      {
        title: "Badges",
        href: "/ui/badges",
        icon: <Icon.Disc />,
      },
      {
        title: "Buttons",
        href: "/ui/buttons",
        icon: <Icon.Disc />,
      },
      {
        title: "Button Group",
        href: "/ui/btngroup",
        icon: <Icon.Disc />,
      },
      {
        title: "Breadcrumbs",
        href: "/ui/breadcrumbs",
        icon: <Icon.Disc />,
      },
      {
        title: "Cards",
        href: "/ui/cards",
        icon: <Icon.Disc />,
      },
      {
        title: "Collapse",
        href: "/ui/collapse",
        icon: <Icon.Disc />,
      },
      {
        title: "Dropdown",
        href: "/ui/dropdown",
        icon: <Icon.Disc />,
      },
      {
        title: "Grid",
        href: "/ui/grid",
        icon: <Icon.Disc />,
      },
      {
        title: "List Group",
        href: "/ui/listgroup",
        icon: <Icon.Disc />,
      },
      {
        title: "Modal",
        href: "/ui/modal",
        icon: <Icon.Disc />,
      },
      {
        title: "Navbar",
        href: "/ui/navbar",
        icon: <Icon.Disc />,
      },
      {
        title: "Navs",
        href: "/ui/nav",
        icon: <Icon.Disc />,
      },
      {
        title: "Pagination",
        href: "/ui/pagination",
        icon: <Icon.Disc />,
      },
      {
        title: "Popover",
        href: "/ui/popover",
        icon: <Icon.Disc />,
      },
      {
        title: "Progress",
        href: "/ui/progress",
        icon: <Icon.Disc />,
      },
      {
        title: "Spinner",
        href: "/ui/spinner",
        icon: <Icon.Disc />,
      },
      {
        title: "Tabs",
        href: "/ui/tabs",
        icon: <Icon.Disc />,
      },
      {
        title: "Toasts",
        href: "/ui/toasts",
        icon: <Icon.Disc />,
      },
      {
        title: "Tooltip",
        href: "/ui/tooltip",
        icon: <Icon.Disc />,
      },
    ],
  },
  { caption: "Forms" },
  {
    title: "Form Layouts",
    href: "/form-layout",
    icon: <Icon.FileText />,
    id: 3.1,
    collapisble: true,
    children: [
      {
        title: "Basic Forms",
        href: "/form-layout/form-basic",
        icon: <Icon.Disc />,
      },
      {
        title: "Form Grid",
        href: "/form-layout/form-grid",
        icon: <Icon.Disc />,
      },
      {
        title: "Form Group",
        href: "/form-layout/form-group",
        icon: <Icon.Disc />,
      },
      {
        title: "Form Input",
        href: "/form-layout/form-input",
        icon: <Icon.Disc />,
      },
    ],
  },
  {
    title: "Form Pickers",
    href: "/form-pickers",
    icon: <Icon.Droplet />,
    id: 3.2,
    collapisble: true,
    children: [
      {
        title: "Datepicker",
        href: "/form-pickers/datepicker",
        icon: <Icon.Disc />,
      },
      {
        title: "Switches",
        href: "/form-pickers/switches",
        icon: <Icon.Disc />,
      },
    ],
  },
  {
    title: "Form Validation",
    href: "/form-validation",
    icon: <Icon.CheckSquare />,
    id: 3.3,
    collapisble: false,
  },

  {
    title: "Form Editor",
    href: "/form-editor",
    icon: <Icon.Edit />,
    id: 3.5,
    collapisble: false,
  },
  { caption: "Tables" },
  {
    title: "Basic Table",
    href: "/tables/basic-table",
    icon: <Icon.Codepen />,
    id: 4.1,
    collapisble: false,
  },
  {
    title: "React Table",
    href: "/tables/react-table",
    icon: <Icon.Disc />,
    id: 4.2,
    collapisble: false,
  },

  { caption: "Charts" },
  {
    title: "Apexchart",
    href: "/charts/apex",
    icon: <Icon.Loader />,
    id: 5.1,
    collapisble: false,
  },
  {
    title: "ChartJs",
    href: "/charts/chartjs",
    icon: <Icon.PieChart />,
    id: 5.2,
    collapisble: false,
  },
  { caption: "Extra" },
  {
    title: "Sample Pages",
    href: "/sample-pages",
    icon: <Icon.BookOpen />,
    id: 6.1,
    collapisble: true,
    children: [
      {
        title: "Starterkit",
        href: "/sample-pages/starterkit",
        icon: <Icon.Disc />,
      },
      {
        title: "Profile",
        href: "/sample-pages/profile",
        icon: <Icon.Disc />,
      },
      {
        title: "Search Result",
        href: "/sample-pages/search-result",
        icon: <Icon.Disc />,
      },
      {
        title: "Gallery",
        href: "/sample-pages/gallery",
        icon: <Icon.Disc />,
      },
      {
        title: "Helper Class",
        href: "/sample-pages/helper-class",
        icon: <Icon.Disc />,
      },
    ],
  },
  {
    title: "Widget",
    href: "/widget",
    icon: <Icon.Grid />,
    id: 6.4,
    collapisble: false,
  },
  {
    title: "Icons",
    href: "/icons",
    icon: <Icon.Feather />,
    id: 6.2,
    collapisble: true,
    children: [
      {
        title: "Bootstrap",
        href: "/icons/bootstrap",
        icon: <Icon.Disc />,
      },
      {
        title: "Feather",
        href: "/icons/feather",
        icon: <Icon.Disc />,
      },
    ],
  },

  {
    title: "Authentication",
    href: "/auth",
    icon: <Icon.Lock />,
    id: 6.5,
    collapisble: true,
    children: [
      {
        title: "Login",
        href: "/auth/login",
        icon: <Icon.Disc />,
      },
      {
        title: "Register",
        href: "/auth/register",
        icon: <Icon.Disc />,
      },
      {
        title: "Maintanance",
        href: "/auth/maintanance",
        icon: <Icon.Disc />,
      },
      {
        title: "Lockscreen",
        href: "/auth/lockscreen",
        icon: <Icon.Disc />,
      },
      {
        title: "Recover Password",
        href: "/auth/recoverpwd",
        icon: <Icon.Disc />,
      },
      {
        title: "Error",
        href: "/auth/404",
        icon: <Icon.Disc />,
      },
    ],
  },
  {
    title: "DD Menu",
    href: "/",
    id: 7,
    collapisble: true,
    icon: <Icon.Disc />,
    children: [
      {
        title: "Simple dd 1",
        href: "/",
        icon: <Icon.Disc />,
      },
      {
        title: "Simple dd 2",
        href: "/",
        icon: <Icon.Disc />,
      },
      {
        title: "Simple dd 3",
        href: "/",
        icon: <Icon.Disc />,
        children: [
          {
            title: "Simple dd 1.1",
            href: "/alerts",
            icon: <Icon.Disc />,
          },
        ],
      },
    ],
  },*/
];

export default SidebarData;
