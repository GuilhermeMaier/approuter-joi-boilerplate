"use client";
import { IconButton, Switch, Tooltip, switchClasses } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import { useEffect, useState } from "react";
import { MdBrightnessHigh, MdDarkMode } from "react-icons/md";
("react-icons/md");

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Tooltip title={"Esquema de cores"} arrow size="sm">
      <Switch
        sx={{
          position: "fixed",
          top: "4px",
          right: "4px",
          "--Switch-thumbSize": "21px",
          "--Switch-trackWidth": "45px",
          "--Switch-trackHeight": "25px",
          [`& .${switchClasses.thumb}`]: {
            transition: "width 0.2s, left 0.2s",
          },
        }}
        slotProps={{
          thumb: {
            children:
              mode === "light" ? (
                <IconButton
                  color="warning"
                  sx={{ pointerEvents: "none", padding: 0 }}
                >
                  <MdBrightnessHigh />
                </IconButton>
              ) : (
                <IconButton
                  color="primary"
                  sx={{ pointerEvents: "none", padding: 0 }}
                >
                  <MdDarkMode />
                </IconButton>
              ),
          },
        }}
        checked={mode === "light"}
        onChange={({ target: { checked } }) =>
          setMode(checked === true ? "light" : "dark")
        }
      />
    </Tooltip>
  );
}
