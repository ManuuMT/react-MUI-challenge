import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { FooterList } from "../FooterList";
import { footerArray, socialIconsArray } from "./Footer+Helper";
import { BoxWrapper } from "./Footer.styled";
import PhoneIcon from "@mui/icons-material/Phone";
import NativeSelect from "@mui/material/NativeSelect";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.1)",
        marginTop: "80px",
        padding: "80px 0",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "112px" }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "25%",
                pt: 2,
              }}
            >
              <BoxWrapper>
                <Typography
                  sx={{ color: "rgba(0,0,0,0.3)", fontWeight: "medium" }}
                >
                  LOGO
                </Typography>
              </BoxWrapper>
              <Typography
                sx={{
                  color: "rgba(0,0,0,0.5)",
                  width: "80%",
                  fontWeight: "medium",
                }}
              >
                We sell custom products for all your needs. Packs and bulk
                products that you will enjoy.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "fit-content",
                  gap: "8px",
                }}
              >
                <PhoneIcon />
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  +1-202-555-0129
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "16px",
                  width: "fit-content",
                }}
              >
                {socialIconsArray.map((icon) => (
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    key={icon.alt}
                    style={{ height: "32px", width: "32px" }}
                  />
                ))}
              </Box>
            </Box>
            {footerArray.map((list) => (
              <FooterList
                key={list.title}
                title={list.title}
                list={list.content}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "rgba(0,0,0,0.5)" }}>
              © 2022 Customer Products. All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: "32px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography> Region: </Typography>
                <NativeSelect value={1} sx={{ fontWeight: "bold " }}>
                  <option value={1}>United States</option>
                  <option value={2}>Spain</option>
                </NativeSelect>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography> Language: </Typography>
                <NativeSelect value={1} sx={{ fontWeight: "bold " }}>
                  <option value={1}>English</option>
                  <option value={2}>Spanish</option>
                </NativeSelect>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
