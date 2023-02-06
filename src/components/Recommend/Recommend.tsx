import Box from "@mui/material/Box";
import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { shirtProductArray } from "./Recommend+Helper";
import { BigEmptyBox } from "./Recommend.styled";

const Recommend: React.FC = () => {
  return (
    <Container sx={{ marginTop: "50px", marginBottom: "120px" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        You might also like
      </Typography>
      <Box sx={{ display: "flex", gap: "10px" }}>
        {shirtProductArray.map((item) => (
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            key={crypto.randomUUID()}
          >
            <BigEmptyBox />
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
              {item.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                $10 - $24
              </Typography>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "rgba(0,0,0,0.4)" }}
                >
                  Minimum:
                </Typography>
                <Typography variant="subtitle2">24</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Recommend;
