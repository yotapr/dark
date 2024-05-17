import * as Icon from "react-feather";

const SidebarData = [
  { caption: "Home" },
  {
    title: "Dashboards",
    href: "/dashboards",
    id: 1,
    suffix: "4",
    suffixColor: "bg-info",
    icon: <Icon.Home />,
    collapisble: true,
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
    ],
  },
  { caption: "Apps" },
  {
    title: "Apps",
    href: "/apps",
    id: 2,
    icon: <Icon.Grid />,
    ddType: "two-column",
    collapisble: true,
    children: [
      {
        title: "Notes",
        href: "/apps/notes",
        icon: <Icon.FileText />,
      },
      {
        title: "Chat",
        href: "/apps/chat",
        icon: <Icon.MessageCircle />,
      },
      {
        title: "Contacts",
        href: "/apps/contacts",
        icon: <Icon.User />,
      },
      {
        title: "Calendar",
        href: "/apps/calendar",
        icon: <Icon.Calendar />,
      },
      {
        title: "Email",
        href: "/apps/email",
        icon: <Icon.Mail />,
      },
      {
        title: "CASL",
        href: "/apps/casl",
        icon: <Icon.UserCheck />,
      },
      {
        title: "Shop",
        href: "/apps/ecom/list",
        icon: <Icon.ShoppingBag />,
      },
      {
        title: "Shop Detail",
        href: "/apps/ecom/detail",
        icon: <Icon.ShoppingCart />,
      },
      {
        title: "Ticket List",
        href: "/apps/ticket/list",
        icon: <Icon.Bookmark />,
      },
      {
        title: "Ticket Detail",
        href: "/apps/ticket/detail",
        icon: <Icon.Bookmark />,
      },
      {
        title: "TreeView",
        href: "/apps/treeview",
        icon: <Icon.GitMerge />,
      },
    ],
  },
  { caption: "UI" },
  {
    title: "UI Elements",
    href: "/ui",
    id: 3,
    suffix: "22",
    suffixColor: "bg-danger",
    ddType: "mega-dropdown",
    icon: <Icon.Cpu />,
    collapisble: true,
    children: [
      {
        title: "Alert",
        href: "/ui/alerts",
        icon: <Icon.Droplet />,
      },
      {
        title: "Badges",
        href: "/ui/badges",
        icon: <Icon.Droplet />,
      },
      {
        title: "Buttons",
        href: "/ui/buttons",
        icon: <Icon.Droplet />,
      },
      {
        title: "Button Group",
        href: "/ui/btngroup",
        icon: <Icon.Droplet />,
      },
      {
        title: "Breadcrumbs",
        href: "/ui/breadcrumbs",
        icon: <Icon.Droplet />,
      },
      {
        title: "Cards",
        href: "/ui/cards",
        icon: <Icon.Droplet />,
      },
      {
        title: "Collapse",
        href: "/ui/collapse",
        icon: <Icon.Droplet />,
      },
      {
        title: "Dropdown",
        href: "/ui/dropdown",
        icon: <Icon.Droplet />,
      },
      {
        title: "Grid",
        href: "/ui/grid",
        icon: <Icon.Droplet />,
      },
      {
        title: "List Group",
        href: "/ui/listgroup",
        icon: <Icon.Droplet />,
      },
      {
        title: "Modal",
        href: "/ui/modal",
        icon: <Icon.Droplet />,
      },
      {
        title: "Navbar",
        href: "/ui/navbar",
        icon: <Icon.Droplet />,
      },
      {
        title: "Navs",
        href: "/ui/nav",
        icon: <Icon.Droplet />,
      },
      {
        title: "Pagination",
        href: "/ui/pagination",
        icon: <Icon.Droplet />,
      },
      {
        title: "Popover",
        href: "/ui/popover",
        icon: <Icon.Droplet />,
      },
      {
        title: "Progress",
        href: "/ui/progress",
        icon: <Icon.Droplet />,
      },
      {
        title: "Spinner",
        href: "/ui/spinner",
        icon: <Icon.Droplet />,
      },
      {
        title: "Tabs",
        href: "/ui/tabs",
        icon: <Icon.Droplet />,
      },
      {
        title: "Toasts",
        href: "/ui/toasts",
        icon: <Icon.Droplet />,
      },
      {
        title: "Tooltip",
        href: "/ui/tooltip",
        icon: <Icon.Droplet />,
      },
    ],
  },
  { caption: "Forms" },
  {
    title: "Forms",
    href: "/forms",
    icon: <Icon.FileText />,
    id: 4,
    collapisble: true,
    children: [
      {
        title: "Basic Forms",
        href: "/form-layout/form-basic",
        icon: <Icon.Columns />,
      },
      {
        title: "Form Grid",
        href: "/form-layout/form-grid",
        icon: <Icon.Octagon />,
      },
      {
        title: "Form Group",
        href: "/form-layout/form-group",
        icon: <Icon.Archive />,
      },
      {
        title: "Form Input",
        href: "/form-layout/form-input",
        icon: <Icon.Edit3 />,
      },
      {
        title: "Datepicker",
        href: "/form-pickers/datepicker",
        icon: <Icon.Calendar />,
      },

      {
        title: "Form Validation",
        href: "/form-validation",
        icon: <Icon.CheckSquare />,
      },

      {
        title: "Form Editor",
        href: "/form-editor",
        icon: <Icon.Edit />,
      },
    ],
  },

  { caption: "Tables" },
  {
    title: "Tables",
    href: "/tables",
    icon: <Icon.Feather />,
    id: 5,
    collapisble: true,
    children: [
      {
        title: "Basic Table",
        href: "/tables/basic-table",
        icon: <Icon.Codepen />,
      },
      {
        title: "React Table",
        href: "/tables/react-table",
        icon: <Icon.Disc />,
      },
    ],
  },
  { caption: "Extra" },
  {
    title: "Extra",
    href: "/extra",
    icon: <Icon.BookOpen />,
    id: 6,
    ddType: "two-column",
    collapisble: true,
    children: [
      {
        title: "Apexchart",
        href: "/charts/apex",
        icon: <Icon.Loader />,
      },
      {
        title: "ChartJs",
        href: "/charts/chartjs",
        icon: <Icon.PieChart />,
      },
      {
        title: "Starterkit",
        href: "/sample-pages/starterkit",
        icon: <Icon.Edit />,
      },
      {
        title: "Profile",
        href: "/sample-pages/profile",
        icon: <Icon.User />,
      },
      {
        title: "Search Result",
        href: "/sample-pages/search-result",
        icon: <Icon.Search />,
      },
      {
        title: "Gallery",
        href: "/sample-pages/gallery",
        icon: <Icon.Camera />,
      },
      {
        title: "Helper Class",
        href: "/sample-pages/helper-class",
        icon: <Icon.Headphones />,
      },
      {
        title: "Widget",
        href: "/widget",
        icon: <Icon.Grid />,
      },
      {
        title: "Bootstrap Icons",
        href: "/icons/bootstrap",
        icon: <Icon.Feather />,
      },
      {
        title: "Feather Icons",
        href: "/icons/feather",
        icon: <Icon.Feather />,
      },

      {
        title: "Login",
        href: "/auth/login",
        icon: <Icon.LogIn />,
      },
      {
        title: "Register",
        href: "/auth/register",
        icon: <Icon.Edit2 />,
      },
      {
        title: "Maintanance",
        href: "/auth/maintanance",
        icon: <Icon.Sliders />,
      },
      {
        title: "Lockscreen",
        href: "/auth/lockscreen",
        icon: <Icon.Lock />,
      },
      {
        title: "Recover Password",
        href: "/auth/recoverpwd",
        icon: <Icon.RefreshCcw />,
      },
      {
        title: "Error",
        href: "/auth/404",
        icon: <Icon.AlertCircle />,
      },
    ],
  },
];

export default SidebarData;
