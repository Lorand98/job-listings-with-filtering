import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import { ReactComponent as MyHome } from "../../../assets/myhome.svg";
import { mainColor } from "../../../theme";
import Tag from "../../ui/Tag";

const Job = () => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        p: "1.8rem",
        boxShadow: "0rem 1rem 2rem -1.2rem hsl(180, 29%, 50%)",
      }}
    >
      <Grid container spacing={"2rem"}>
        <Grid item>
          <MyHome />
        </Grid>
        <Grid item desktop={5}>
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: "600" }}>
              Photosnap
            </Typography>
            <Tag bgColor={theme.palette.primary.main}>new!</Tag>
            <Tag bgColor="#2c3a3a">featured</Tag>
          </Box>
        </Grid>
        <Grid item desktop={5}>
          TEST2
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Job;
