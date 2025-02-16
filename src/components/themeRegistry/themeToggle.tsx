"use client";
import { BrightnessHigh, DarkMode } from "@mui/icons-material";
import { IconButton, Switch, Tooltip, useColorScheme } from "@mui/material";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("mode", mode);
  }, [mode]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Tooltip title={"Esquema de cores"} arrow>
      <Switch
        sx={{
          position: "fixed",
          top: "4px",
          right: "4px",
          paddingX: "10px",
          paddingY: "8px",
          "& .MuiSwitch-switchBase": {
            marginLeft: "6px",
            marginRight: "8px",
            marginY: "10px",
            padding: 0,
            transform: "translateX(6px)",
            "&.Mui-checked": {
              transform: "translateX(22px)",
              "& + .MuiSwitch-track": {
                opacity: 1,
              },
            },
          },
          "& .MuiSwitch-thumb": {
            width: 32,
            height: 32,
            "&::before": {
              content: "''",
              position: "absolute",
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
            },
          },
          "& .MuiSwitch-track": {
            opacity: 1,
            borderRadius: 20 / 2,
          },
        }}
        checkedIcon={
          <IconButton size="small" color="warning" sx={{ padding: 0 }}>
            <BrightnessHigh />
          </IconButton>
        }
        icon={
          <IconButton size="small" color="primary" sx={{ padding: 0 }}>
            <DarkMode />
          </IconButton>
        }
        checked={mode === "light"}
        onChange={({ target: { checked } }) => {
          console.log("entrou", checked);
          setMode(checked === true ? "light" : "dark");
        }}
      />
    </Tooltip>
  );
}
