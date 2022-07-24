import React, { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getDonate } from "../store/AppReducer/action";
import DonateCard from "./donate/DonateCard";

const HomeDonate = () => {
  const dispatch = useDispatch();
  const donate = useSelector((store) => store.reducer.donate);

  useEffect(() => {
    if (donate.length === 0) {
      dispatch(getDonate());
    }
  }, []);

  return (
    <Box m="auto" pt="80px">
      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        gap="30px"
      >
        {donate.map((e, i) => {
          if (i < 6) {
            return <DonateCard key={e.id} e={e} />;
          }
        })}
      </Grid>
    </Box>
  );
};

export default HomeDonate;
