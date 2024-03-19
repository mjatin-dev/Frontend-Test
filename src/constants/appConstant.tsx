import homeIcon from "../assets/icons/smart-home.png";
import starIcon from "../assets/icons/star.png";
import boxIcon from "../assets/icons/box.png";
import addIcon from "../assets/icons/circle-plus.png";
import categoryIcon from "../assets/icons/circle-square.png";
import userIcon from "../assets/icons/users.png";
import ticketIcon from "../assets/icons/ticket.png";
import fileIcon from "../assets/icons/file-text.png";
import settingIcon from "../assets/icons/settings.png";
import manageIcon from "../assets/icons/user-circle.png";
import cartIcon from "../assets/icons/shopping-cart.png";

export const mainMenuNavItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: homeIcon,
  },
  {
    title: "Order Management",
    url: "/order-management",
    icon: cartIcon,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: userIcon,
  },
  {
    title: "Coupon Code",
    url: "/coupon-code",
    icon: ticketIcon,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: categoryIcon,
  },
  {
    title: "Transaction",
    url: "/transaction",
    icon: fileIcon,
  },
  {
    title: "Brand",
    url: "/brand",
    icon: starIcon,
  },
];
export const productsNavItems = [
  {
    title: "Add Products",
    url: "/add-products",
    icon: addIcon,
  },
  {
    title: "Product List",
    url: "/product-list",
    icon: boxIcon,
  },
];
export const adminNavItems = [
  {
    title: "Manage Admins",
    url: "/manage-admins",
    icon: manageIcon,
  },
  {
    title: "Admin Roles",
    url: "/admin-roles",
    icon: settingIcon,
  },
];
