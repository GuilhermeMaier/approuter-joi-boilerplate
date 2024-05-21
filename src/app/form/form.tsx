import { Box, Button, Divider, Typography } from "@mui/joy";
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
        <Typography level="title-md">Primária</Typography>
        <Link href={"/home"}>
          <Button variant="soft" color="primary" fullWidth>
            Soft
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="plain" color="primary" fullWidth>
            Plain
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="primary" fullWidth>
            Outlined
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="solid" color="primary" fullWidth>
            Solid
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
        <Typography level="title-md">Neutro</Typography>
        <Link href={"/home"}>
          <Button variant="soft" color="neutral" fullWidth>
            Soft
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="plain" color="neutral" fullWidth>
            Plain
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="neutral" fullWidth>
            Outlined
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="solid" color="neutral" fullWidth>
            Solid
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
      <Divider />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography level="title-md" textColor={"text.primary"}>
          Cuidado
        </Typography>
        <Link href={"/home"}>
          <Button variant="soft" color="warning" fullWidth>
            Soft
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="plain" color="warning" fullWidth>
            Plain
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="warning" fullWidth>
            Outlined
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="solid" color="warning" fullWidth>
            Solid
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
        <Typography level="title-md">Erro</Typography>
        <Link href={"/home"}>
          <Button variant="soft" color="danger" fullWidth>
            Soft
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="plain" color="danger" fullWidth>
            Plain
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="danger" fullWidth>
            Outlined
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="solid" color="danger" fullWidth>
            Solid
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
        <Typography level="title-md">Sucesso</Typography>
        <Link href={"/home"}>
          <Button variant="soft" color="success" fullWidth>
            Soft
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="plain" color="success" fullWidth>
            Plain
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="success" fullWidth>
            Outlined
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="solid" color="success" fullWidth>
            Solid
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
    </Box>
  );
};

export default Form;
