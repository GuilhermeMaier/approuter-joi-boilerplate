import { Box, Button, Divider, Typography } from "@mui/material";
import Link from "next/link";

const Form = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      height={"100vh"}
      alignItems={"center"}
      gap={2}
    >
      <Divider orientation="vertical" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography variant="h3">Primária</Typography>
        <Link href={"/home"}>
          <Button variant="contained" color="primary" fullWidth>
            Contained
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="primary" fullWidth>
            Outlined
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="text" color="primary" fullWidth>
            Text
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography variant="h3">Secundária</Typography>
        <Link href={"/home"}>
          <Button variant="contained" color="secondary" fullWidth>
            Contained
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="secondary" fullWidth>
            Outlined
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="text" color="secondary" fullWidth>
            Text
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography variant="h3">Info</Typography>
        <Link href={"/home"}>
          <Button variant="contained" color="info" fullWidth>
            Contained
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="info" fullWidth>
            Plain
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="text" color="info" fullWidth>
            Text
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography variant="h3">Cuidado</Typography>
        <Link href={"/home"}>
          <Button variant="contained" color="warning" fullWidth>
            Contained
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="warning" fullWidth>
            Plain
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="text" color="warning" fullWidth>
            Text
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography variant="h3">Erro</Typography>
        <Link href={"/home"}>
          <Button variant="contained" color="error" fullWidth>
            Contained
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="error" fullWidth>
            Plain
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="text" color="error" fullWidth>
            Text
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography variant="h3">Sucesso</Typography>
        <Link href={"/home"}>
          <Button variant="contained" color="success" fullWidth>
            Contained
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="success" fullWidth>
            Outlined
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="text" color="success" fullWidth>
            Text
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
    </Box>
  );
};

export default Form;
