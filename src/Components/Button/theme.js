const disabled = {
  color: "#7C8894",
  bgColor: "#C0C9D2",
  borderColor: "1px solid #C0C9D2"
};
const primary = {
  borderColor: "1px solid #179aa5",
  color: "#fff",
  bgColor: "#179aa5",
  hoverBg: "#148d79",
  activeBg: "#006670"
};
const secondary = {
  borderColor: "1px solid #0a337a",
  color: "#fff",
  bgColor: "#0a337a",
  hoverBg: "#001e53",
  activeBg: "#001f56"
};

const PrimaryOutline = {
  borderColor: "1px solid #17A4AF",
  color: "#04B3C0",
  bgColor: "transparent",
  hoverBg: "#EFFEFF",
  activeBg: "#04B3C0"
};

const SecondaryOutline = {
  borderColor: "1px solid #0A337A",
  color: "#193B7B",
  bgColor: "transparent",
  hoverBg: "#EFF5FF",
  activeBg: "#3F68AB"
};

export default {
  buttons: {
    primary: {
      color: primary.color,
      backgroundColor: primary.bgColor,
      border: primary.borderColor,
      "&:hover": {
        backgroundColor: primary.hoverBg,
        color: primary.color,
        border: primary.borderColor
      },
      "&:focus": {
        backgroundColor: primary.activeBg,
        color: primary.color,
        border: primary.borderColor
      },
      "&:active": {
        backgroundColor: primary.activeBg,
        color: primary.color,
        border: primary.borderColor
      },
      "&:disabled": {
        backgroundColor: disabled.bgColor,
        color: disabled.color,
        border: disabled.borderColor,
        cursor: "auto"
      }
    },
    secondary: {
      color: secondary.color,
      backgroundColor: secondary.bgColor,
      border: secondary.borderColor,
      "&:hover": {
        backgroundColor: secondary.hoverBg,
        color: secondary.color,
        border: secondary.borderColor
      },
      "&:focus": {
        backgroundColor: secondary.activeBg,
        color: secondary.color,
        border: secondary.borderColor
      },
      "&:active": {
        backgroundColor: secondary.activeBg,
        color: secondary.color,
        border: secondary.borderColor
      },
      "&:disabled": {
        backgroundColor: disabled.bgColor,
        color: disabled.color,
        border: disabled.borderColor,
        cursor: "auto"
      }
    },
    primaryOutline: {
      color: PrimaryOutline.color,
      backgroundColor: PrimaryOutline.bgColor,
      border: PrimaryOutline.borderColor,
      "&:hover": {
        backgroundColor: PrimaryOutline.hoverBg,
        color: PrimaryOutline.color,
        border: PrimaryOutline.borderColor
      },
      "&:focus": {
        backgroundColor: PrimaryOutline.activeBg,
        color: "#fff",
        border: PrimaryOutline.borderColor
      },
      "&:active": {
        backgroundColor: PrimaryOutline.activeBg,
        color: "#fff",
        border: PrimaryOutline.borderColor
      },
      "&:disabled": {
        backgroundColor: disabled.bgColor,
        color: disabled.color,
        border: disabled.borderColor,
        cursor: "auto"
      }
    },
    secondaryOutline: {
      color: SecondaryOutline.color,
      backgroundColor: SecondaryOutline.bgColor,
      border: SecondaryOutline.borderColor,
      "&:hover": {
        backgroundColor: SecondaryOutline.hoverBg,
        color: SecondaryOutline.color,
        border: SecondaryOutline.borderColor
      },
      "&:focus": {
        backgroundColor: SecondaryOutline.activeBg,
        color: "#fff",
        border: SecondaryOutline.borderColor
      },
      "&:active": {
        backgroundColor: SecondaryOutline.activeBg,
        color: "#fff",
        border: SecondaryOutline.borderColor
      },
      "&:disabled": {
        backgroundColor: disabled.bgColor,
        color: disabled.color,
        border: disabled.borderColor,
        cursor: "auto"
      }
    }
  }
};
