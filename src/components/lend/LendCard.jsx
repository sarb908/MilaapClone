import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLend } from "../../store/AppReducer/action";
import { Box } from "@chakra-ui/react";
import Card from "./Card";

const LendCard = () => {
  const dispatch = useDispatch();
  const lend = useSelector((store) => store.reducer.lend);
  console.log(lend);

  useEffect(() => {
    if (lend.length === 0) {
      dispatch(getLend);
    }
  });
  return (
    <Box border="1px solid teal">
      {lend.map((item) => {
        return <Card key={item.id} e={item} />;
      })}
    </Box>
  );
};

export default LendCard;
