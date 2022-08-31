import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

function Tag({ bgColor, children }: { bgColor: string; children: ReactNode }) {
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        color: "white",
        borderRadius: 10,
        paddingInline: "0.7rem",
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
        }}
        variant="caption"
      >
        {children}
      </Typography>
    </Box>
  );
}

export default Tag;
