import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLend } from "../../store/AppReducer/action";
import { Box } from "@chakra-ui/react";
import Card from "./Card";
import { useLocation, useSearchParams } from "react-router-dom";

const LendCard = () => {
  const dispatch = useDispatch();
  const lend = useSelector((store) => store.reducer.lend);
  const location = useLocation();
  const [searchparams] = useSearchParams();


  useEffect(() => {
    if (lend.length === 0 || location.search) {
      const sortBy = searchparams.get("sortBy");
      let getLendParams = {
        params: {
          state: searchparams.getAll("state"),
          cause: searchparams.getAll("cause"),
          _sort: "required_price",
          _order: sortBy,
        },
      };
      dispatch(getLend(getLendParams));
    }
  }, [location.search]);
  return (
    <Box>
      {lend.map((item) => {
        return <Card key={item.id} e={item} />;
      })}
    </Box>
  );
};

export default LendCard;
