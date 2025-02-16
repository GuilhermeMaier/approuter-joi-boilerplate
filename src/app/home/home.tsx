import { Box, Button, Card } from "@mui/material";
import Link from "next/link";

const Home = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      height={"100vh"}
      alignItems={"center"}
    >
      <Card variant="outlined">
        <Link href={"/form"}>
          <Button color="primary">Vá até o formulário</Button>
        </Link>
      </Card>
    </Box>
  );
};

export default Home;
