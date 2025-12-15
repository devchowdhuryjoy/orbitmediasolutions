import React from "react";

export default function RainbowGradientButton({
  children = "View All Products",
  type = "button",
  href,
  withoutShape = false,
  circle = false,
  onClick,
}) {
  const className = [
    "rainbow-gradient-btn",
    withoutShape ? "without-shape" : "",
    circle ? "without-shape-circle" : "",
  ]
    .join(" ")
    .trim();

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      <span>{children}</span>

      <style>{`
        :root {
          --color-dark: #4b0082;   /* Dark violet */
          --color-light: #cba4ed;  /* Light violet */
          --radius: 8px;
        }

        .rainbow-gradient-btn {
          position: relative;
          display: inline-block;
          padding: 2px;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .rainbow-gradient-btn span {
          display: inline-block;
          height: 45px;
          line-height: 45px;
          position: relative;
          z-index: 3;
          background: #fff;
          padding: 0 30px;
          clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 14px, 100% 100%, 0 100%);
          border-radius: 2px;
          font-size: 16px;
          font-weight: 500;
          color: #0e0c15;
          white-space: nowrap;
        }

        /* Two gradient layers with border effect */
        .rainbow-gradient-btn::before,
        .rainbow-gradient-btn::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 14px, 100% 100%, 0 100%);
          border-radius: 2px;
          transition: all 0.3s ease;
          border: 1px solid transparent; /* normal border thickness */
          box-sizing: border-box;
        }

        /* Normal gradient: dark -> light */
        .rainbow-gradient-btn::before {
          background: linear-gradient(to bottom right, var(--color-dark), var(--color-light));
        }

        /* Hover gradient: light -> dark, initially hidden */
        .rainbow-gradient-btn::after {
          background: linear-gradient(to bottom right, var(--color-light), var(--color-dark));
          opacity: 0;
          visibility: hidden;
          border: 1px solid transparent; /* match normal border */
        }

        /* On hover: show ::after and increase border */
        .rainbow-gradient-btn:hover::after {
          opacity: 1;
          visibility: visible;
          border: 2px solid transparent; /* border grows */
        }

        .rainbow-gradient-btn:hover::before {
          border: 2px solid transparent; /* increase ::before border too */
        }

        /* Remove shape for square buttons */
        .rainbow-gradient-btn.without-shape {
          border-radius: var(--radius);
        }

        .rainbow-gradient-btn.without-shape::before,
        .rainbow-gradient-btn.without-shape::after,
        .rainbow-gradient-btn.without-shape span {
          clip-path: none;
          border-radius: var(--radius);
        }

        /* Circular button */
        .rainbow-gradient-btn.without-shape-circle {
          border-radius: 100px;
        }

        .rainbow-gradient-btn.without-shape-circle::before,
        .rainbow-gradient-btn.without-shape-circle::after,
        .rainbow-gradient-btn.without-shape-circle span {
          clip-path: none;
          border-radius: 100px;
        }
      `}</style>
    </button>
  );
}
