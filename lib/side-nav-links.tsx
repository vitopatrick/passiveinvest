import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { AiFillMoneyCollect, AiOutlineBank } from "react-icons/ai";
import { SiMarketo } from "react-icons/si";
import { MdMoney } from "react-icons/md";

export const FIRST_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <RxDashboard />,
  },
  {
    key: "profile",
    label: "Profile",
    path: "/account-profile",
    icon: <CgProfile />,
  },
];

export const SECOND_LINKS = [
  {
    key: "deposit",
    label: "Deposit",
    path: "/deposit",
    icon: <AiOutlineBank />,
  },
  {
    key: "withdraw",
    label: "Withdraw",
    path: "/withdraw",
    icon: <AiFillMoneyCollect />,
  },
  {
    key: "market",
    label: "Market",
    path: "/market",
    icon: <SiMarketo />,
  },
  {
    key: "invest",
    label: "Invest",
    path: "/invest",
    icon: <MdMoney />,
  },
  // {
  //   key: "referral",
  //   label: "Referral",
  //   path: "/referral",
  //   icon: <FaHandshakeAltSlash />,
  // },
];

