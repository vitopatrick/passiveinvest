import React from "react";
import { motion } from "framer-motion";

const Logo = ({ sm = 40, lg = 40 }: { sm?: number; lg?: number }) => {
  return (
    <svg
      className={`w-[${sm}%] md:w-[${lg}%] py-3`}
      viewBox="0 0 391 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M29.008 34.12C28.592 34.44 27.872 34.872 26.848 35.416C25.824 35.928 24.56 36.392 23.056 36.808C21.584 37.224 19.936 37.416 18.112 37.384C15.36 37.32 12.88 36.824 10.672 35.896C8.496 34.936 6.64 33.64 5.104 32.008C3.6 30.376 2.448 28.504 1.648 26.392C0.848 24.28 0.448 22.04 0.448 19.672C0.448 16.984 0.848 14.52 1.648 12.28C2.48 10.04 3.648 8.104 5.152 6.472C6.688 4.84 8.512 3.576 10.624 2.68C12.736 1.784 15.072 1.336 17.632 1.336C19.968 1.336 22.032 1.656 23.824 2.296C25.648 2.936 27.136 3.624 28.288 4.36L25.648 10.744C24.848 10.104 23.776 9.464 22.432 8.824C21.088 8.184 19.568 7.864 17.872 7.864C16.496 7.864 15.168 8.152 13.888 8.728C12.64 9.304 11.536 10.12 10.576 11.176C9.616 12.2 8.848 13.4 8.272 14.776C7.728 16.152 7.456 17.656 7.456 19.288C7.456 20.984 7.712 22.552 8.224 23.992C8.736 25.4 9.456 26.632 10.384 27.688C11.344 28.712 12.48 29.496 13.792 30.04C15.104 30.584 16.592 30.856 18.256 30.856C20.144 30.856 21.76 30.568 23.104 29.992C24.448 29.384 25.488 28.744 26.224 28.072L29.008 34.12ZM42.3168 19.432C42.3168 17 42.7808 14.696 43.7088 12.52C44.6368 10.344 45.9168 8.424 47.5488 6.76C49.2128 5.064 51.1168 3.736 53.2608 2.776C55.4368 1.816 57.7728 1.336 60.2688 1.336C62.7328 1.336 65.0528 1.816 67.2288 2.776C69.4048 3.736 71.3248 5.064 72.9888 6.76C74.6848 8.424 75.9968 10.344 76.9248 12.52C77.8848 14.696 78.3648 17 78.3648 19.432C78.3648 21.896 77.8848 24.216 76.9248 26.392C75.9968 28.568 74.6848 30.488 72.9888 32.152C71.3248 33.784 69.4048 35.064 67.2288 35.992C65.0528 36.92 62.7328 37.384 60.2688 37.384C57.7728 37.384 55.4368 36.92 53.2608 35.992C51.1168 35.064 49.2128 33.784 47.5488 32.152C45.9168 30.488 44.6368 28.584 43.7088 26.44C42.7808 24.264 42.3168 21.928 42.3168 19.432ZM49.2768 19.432C49.2768 21 49.5648 22.488 50.1408 23.896C50.7168 25.272 51.5168 26.488 52.5408 27.544C53.5648 28.6 54.7488 29.416 56.0928 29.992C57.4368 30.568 58.9088 30.856 60.5088 30.856C62.0448 30.856 63.4688 30.568 64.7808 29.992C66.0928 29.416 67.2288 28.6 68.1888 27.544C69.1808 26.488 69.9488 25.272 70.4928 23.896C71.0688 22.488 71.3568 21 71.3568 19.432C71.3568 17.8 71.0688 16.296 70.4928 14.92C69.9488 13.512 69.1648 12.28 68.1408 11.224C67.1488 10.168 65.9808 9.352 64.6368 8.776C63.3248 8.168 61.8848 7.864 60.3168 7.864C58.7488 7.864 57.2928 8.168 55.9488 8.776C54.6368 9.352 53.4688 10.168 52.4448 11.224C51.4528 12.28 50.6688 13.512 50.0928 14.92C49.5488 16.296 49.2768 17.8 49.2768 19.432ZM93.7518 1.72H100.472V37H93.7518V1.72ZM149.577 38.392L122.793 13.96L124.761 15.016L124.905 37H118.089V0.375999H118.377L144.585 24.76L143.097 24.136L142.953 1.72H149.769V38.392H149.577ZM172.452 1.72L182.868 27.448L178.932 26.68L188.436 1.72H196.452L180.372 38.632L164.34 1.72H172.452ZM211.014 1.72H234.966V8.248H217.734V16.072H232.998V22.552H217.734V30.472H235.638V37H211.014V1.72ZM270.104 10.072C268.792 9.336 267.432 8.728 266.024 8.248C264.616 7.768 263.304 7.528 262.088 7.528C260.552 7.528 259.336 7.848 258.44 8.488C257.576 9.128 257.144 10.056 257.144 11.272C257.144 12.136 257.464 12.904 258.104 13.576C258.776 14.248 259.64 14.84 260.696 15.352C261.752 15.864 262.84 16.328 263.96 16.744C264.984 17.128 265.992 17.592 266.984 18.136C268.008 18.648 268.92 19.304 269.72 20.104C270.552 20.872 271.208 21.848 271.688 23.032C272.168 24.184 272.408 25.592 272.408 27.256C272.408 29.08 271.944 30.76 271.016 32.296C270.088 33.8 268.728 35.032 266.936 35.992C265.176 36.92 262.984 37.384 260.36 37.384C259.016 37.384 257.64 37.256 256.232 37C254.856 36.712 253.496 36.296 252.152 35.752C250.84 35.176 249.56 34.456 248.312 33.592L251.336 28.36C252.136 28.936 253.032 29.464 254.024 29.944C255.016 30.424 256.008 30.792 257 31.048C257.992 31.304 258.92 31.432 259.784 31.432C260.616 31.432 261.464 31.304 262.328 31.048C263.224 30.792 263.944 30.36 264.488 29.752C265.064 29.144 265.352 28.328 265.352 27.304C265.352 26.536 265.112 25.864 264.632 25.288C264.152 24.68 263.512 24.136 262.712 23.656C261.912 23.176 261.032 22.744 260.072 22.36C258.984 21.944 257.864 21.48 256.712 20.968C255.592 20.424 254.52 19.768 253.496 19C252.504 18.2 251.688 17.224 251.048 16.072C250.44 14.92 250.136 13.496 250.136 11.8C250.136 9.784 250.584 8.04 251.48 6.568C252.408 5.064 253.688 3.88 255.32 3.016C256.984 2.12 258.904 1.624 261.08 1.528C263.864 1.528 266.136 1.864 267.896 2.536C269.688 3.176 271.272 3.96 272.648 4.888L270.104 10.072ZM285.272 1.72H309.032V8.248H300.392V37H293.624V8.248H285.272V1.72ZM317.45 37L333.29 0.327997H333.674L349.562 37H341.738L331.466 10.888L336.314 7.576L324.122 37H317.45ZM328.154 24.184H338.954L341.354 29.896H326.09L328.154 24.184ZM373.768 1.72C375.944 1.72 377.88 2.008 379.576 2.584C381.272 3.128 382.696 3.912 383.848 4.936C385.032 5.96 385.928 7.192 386.536 8.632C387.144 10.072 387.448 11.704 387.448 13.528C387.448 14.968 387.224 16.408 386.776 17.848C386.36 19.256 385.672 20.552 384.712 21.736C383.752 22.92 382.472 23.864 380.872 24.568C379.272 25.272 377.304 25.624 374.968 25.624H369.928V37H363.208V1.72H373.768ZM374.92 19.096C376.008 19.096 376.904 18.92 377.608 18.568C378.344 18.216 378.904 17.768 379.288 17.224C379.704 16.648 380.008 16.056 380.2 15.448C380.392 14.84 380.488 14.28 380.488 13.768C380.488 13.352 380.424 12.84 380.296 12.232C380.168 11.624 379.912 11.016 379.528 10.408C379.176 9.8 378.632 9.288 377.896 8.872C377.16 8.456 376.184 8.248 374.968 8.248H369.928V19.096H374.92ZM381.352 23.272L390.136 37H382.264L373.288 23.464L381.352 23.272Z"
        fill="#D9D9D9"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeIn",
          },
        }}
      />
    </svg>
  );
};

export default Logo;
