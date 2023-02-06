import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
export interface FooterListProps {
  title: string;
  list: any[];
}

const FooterList: React.FC<FooterListProps> = (props) => {
  return (
    <List sx={{ width: "25%" }}>
      <Typography
        sx={{ py: 1, px: 2, fontWeight: "bold", color: "primary.main" }}
      >
        {props.title}
      </Typography>
      {props.list.map((item: any, i: number) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ListItem>
            <ListItemText primary={item} sx={{ color: "text.secondary" }} />
          </ListItem>
        </Box>
      ))}
    </List>
  );
};

export default FooterList;
