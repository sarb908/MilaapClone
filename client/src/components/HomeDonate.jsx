import React, { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getDonate } from "../store/AppReducer/action";
import DonateCard from "./donate/DonateCard";

const HomeDonate = (props) => {
  const dispatch = useDispatch();
  const donate = useSelector((store) => store.reducer.donate);

  useEffect(() => {
    dispatch(getDonate());
  }, [dispatch, donate.length]);

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
        {donate
          .filter((e, i) => {
            if (i >= props.s && i <= props.e) {
              return true;
            }
            return false;
          })
          .map((e) => (
            <DonateCard key={e.id} e={e} />
          ))}
      </Grid>
    </Box>
  );
};

export default HomeDonate;
