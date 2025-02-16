import { Components, Theme } from "@mui/material/styles";

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    soft: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    primaryContained: true;
  }
}

export function ComponentOverrides(): Components<Theme> {
  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2),
          backgroundColor: theme.palette.background.paper,
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
          paddingBottom: theme.spacing(1.5),
        }),
        title: {
          fontSize: "1rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          paddingBottom: 0,

          "&:last-child": {
            paddingBottom: 0,
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          justifyContent: "flex-end",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          border: "none",
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "0.875rem",
          "--mui-shape-borderRadius": "0.5rem",
          background: theme.palette.background.paper,
          ".Mui-disabled": {
            background: theme.palette.grey[100],
          },
          input: {
            borderRadius: "0.5rem",
          },
          ".MuiSelect-select": {
            minHeight: "auto!important",
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          svg: {
            fontSize: "inherit",
          },
          variants: [
            {
              props: {
                color: "primaryContained",
              },
              style: {
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              },
            },
          ],
        }),
        colorPrimary: ({ theme }) => ({
          ":hover": {
            // @ts-ignore: Unreachable code error
            background: theme.palette.primary[100],
          },
        }),
        colorSecondary: ({ theme }) => ({
          ":hover": {
            // @ts-ignore: Unreachable code error
            background: theme.palette.secondary[100],
          },
        }),
        colorError: ({ theme }) => ({
          ":hover": {
            // @ts-ignore: Unreachable code error
            background: theme.palette.error[100],
          },
        }),
        colorSuccess: ({ theme }) => ({
          ":hover": {
            // @ts-ignore: Unreachable code error
            background: theme.palette.success[100],
          },
        }),
        colorWarning: ({ theme }) => ({
          ":hover": {
            // @ts-ignore: Unreachable code error
            background: theme.palette.warning[100],
          },
        }),
        colorInfo: ({ theme }) => ({
          ":hover": {
            // @ts-ignore: Unreachable code error
            background: theme.palette.info[100],
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          variants: [
            {
              props: { variant: "soft", color: "primary" },
              style: {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.dark,
                "&:hover": {
                  // @ts-ignore: Unreachable code error
                  backgroundColor: theme.palette.primary[200],
                },
              },
            },
            {
              props: { variant: "soft", color: "secondary" },
              style: {
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.secondary.dark,
                "&:hover": {
                  // @ts-ignore: Unreachable code error
                  backgroundColor: theme.palette.secondary[200],
                },
              },
            },
            {
              props: { variant: "soft", color: "error" },
              style: {
                backgroundColor: theme.palette.error.light,
                color: theme.palette.error.dark,
                "&:hover": {
                  // @ts-ignore: Unreachable code error
                  backgroundColor: theme.palette.error[300],
                },
              },
            },
            {
              props: { variant: "soft", color: "warning" },
              style: {
                backgroundColor: theme.palette.warning.light,
                // @ts-ignore: Unreachable code error
                color: theme.palette.warning[800],
                "&:hover": {
                  // @ts-ignore: Unreachable code error
                  backgroundColor: theme.palette.warning[400],
                },
              },
            },
            {
              props: { variant: "soft", color: "info" },
              style: {
                backgroundColor: theme.palette.info.light,
                color: theme.palette.info.dark,
                "&:hover": {
                  // @ts-ignore: Unreachable code error
                  backgroundColor: theme.palette.info[200],
                },
              },
            },
            {
              props: { variant: "soft", color: "success" },
              style: {
                backgroundColor: theme.palette.success.light,
                color: theme.palette.success.dark,
                "&:hover": {
                  // @ts-ignore: Unreachable code error
                  backgroundColor: theme.palette.success[300],
                },
              },
            },
          ],
        }),
      },
    },
    MuiTable: {
      styleOverrides: {
        root: ({ theme }) => ({
          ".MuiTableHead-root": {
            ".MuiTableCell-head": {
              backgroundColor: theme.palette.background.paper,
            },
            "tr:first-of-type": {
              "th:first-of-type": {
                borderTopLeftRadius: 8,
              },
              "th:last-of-type": {
                borderTopRightRadius: 8,
              },
            },
          },
          ".MuiTableBody-root": {
            "tr:last-of-type": {
              "td:first-of-type": {
                borderBottomLeftRadius: 8,
              },
              "td:last-of-type": {
                borderBottomRightRadius: 8,
              },
            },
          },
          th: {
            paddingTop: "10px",
            paddingBottom: "10px",
          },
          td: {
            paddingTop: "8px",
            paddingBottom: "8px",
          },
        }),
      },
    },
  };
}
