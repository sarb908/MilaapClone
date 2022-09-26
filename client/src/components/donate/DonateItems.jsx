import React, { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getDonate } from "../../store/AppReducer/action";
import DonateCard from "./DonateCard";

const DonateItems = () => {
  const dispatch = useDispatch();
  const donate = useSelector((store) => store.reducer.donate);
  const location = useLocation();
  const [searchparams] = useSearchParams();

  useEffect(() => {
    dispatch(getDonate());
  }, [location.search]);

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
        {donate.map((e) => {
          return <DonateCard key={e.id} e={e} />;
        })}
      </Grid>
    </Box>
  );
};

export default DonateItems;
