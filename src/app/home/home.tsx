import { Box, Button, Card } from "@mui/joy";
import Link from "next/link";

const Home = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      height={"100vh"}
      alignItems={"center"}
    >
      <Card variant="plain">
        <Link href={"/form"}>
          <Button variant="solid" color="primary">
            Vá até o formulário
          </Button>
        </Link>
      </Card>
    </Box>
  );
};

export default Home;
