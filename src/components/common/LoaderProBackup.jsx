import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        background: "rgba(0,0,0)",
        zIndex: 999,
        flexDirection: "column",
      }}
    >
      {/* The element below ensures the loader image is visible above the background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 1000,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 1000,
        }}
      >
        <img
          src="/assets/animation/man-standing.png"
          alt="loader"
          style={{
            width: "35%",
            height: "100dvh",
            display: "block",
            margin: "0 auto",
            opacity: 1,
            zIndex: 10000,
            pointerEvents: "none",
          }}
        />
      </div>
    <div>
    <img
        src="/assets/animation/center.svg"
        alt="loader"
        style={{
          position: "absolute",
          top: "0%",
          left: "51%",
          transform: "translateX(-120%)",
          width: "100%",
          height: "100%",
          display: "block",
          margin: 0,
          opacity: 1,
          zIndex: 10000,
          pointerEvents: "none",
          transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className="intro-center-animation"
      />
   
      <div className="loader-wrap-heading">
        <div className="load-text text-white">
            <span>E</span>
            <span>X</span>
            <span>T</span>
            <span>R</span>
            <span>A</span>
            <span>O</span>
            <span>R</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>A</span>
            <span>R</span>
            <span>Y</span>
            <span> </span>
            <span>B</span>
            <span>E</span>
            <span>G</span>
            <span>I</span>
            <span>N</span>
            <span>S</span>
            <span> </span>
            <span>H</span>
            <span>E</span>
            <span>R</span>
            <span>E</span>
      </div>
    </div>
    </div>
      <style>
        {`
          .intro-center-animation {
            animation: centerIntro 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes centerIntro {
            from {
              transform: translateX(-120%);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <img
        src="/assets/animation/top.svg"
        alt="loader"
        style={{
          position: "absolute",
          top: 0,
          left: "53%",
          transform: "translateX(-50%) translateY(-100%)",
          width: "100%",
          height: "36%",
          display: "block",
          margin: 0,
          opacity: 1,
          zIndex: 10000,
          pointerEvents: "none",
          transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className="intro-top-animation"
      />
      <style>
        {`
          .intro-top-animation {
            transform: translateX(-50%) translateY(-100%);
            animation: topIntro 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes topIntro {
            from {
              transform: translateX(-50%) translateY(-100%);
            }
            to {
              transform: translateX(-50%) translateY(0%);
            }
          }
        `}
      </style>
      <img
        src="/assets/animation/bottom.svg"
        alt="loader"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "52%",
          transform: "translateX(-50%) translateY(100%)",
          width: "100%",
          height: "36%",
          display: "block",
          margin: 0,
          opacity: 1,
          zIndex: 10000,
          pointerEvents: "none",
          transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className="intro-bottom-animation"
      />
      <style>
        {`
          .intro-bottom-animation {
            transform: translateX(-50%) translateY(100%);
            animation: bottomIntro 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes bottomIntro {
            from {
              transform: translateX(-50%) translateY(100%);
            }
            to {
              transform: translateX(-50%) translateY(0%);
            }
          }
        `}
      </style>
    </div>
  );
}
