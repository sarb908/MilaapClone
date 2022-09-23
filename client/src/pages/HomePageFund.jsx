import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Image,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import HomeDonate from "../components/HomeDonate.jsx";

const HomePageFund = () => {
  return (
    <Box m="auto">
      <Box mt={"12%"} mb={"4%"}>
        <Text as={"b"} fontSize={"22px"}>
          Thousands are fundraising online on Milaap
        </Text>
      </Box>
      <Center>
        <Tabs variant="unstyled" align="center">
          <TabList gap="50px">
            <Tab
              h={"150px"}
              w={"190px"}
              _selected={{ color: "white", bg: "#691a47" }}
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Box>
                <Image
                  m={"auto"}
                  src="https://cimages.milaap.org/milaap/image/upload/v1656419855/Black_flood_1_gvivow.png"
                  mt={"8%"}
                />
                <br />
                <Text as={"b"}>Assam</Text>
              </Box>
            </Tab>
            <Tab
              h={"150px"}
              w={"190px"}
              _selected={{ color: "white", bg: "#691a47" }}
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Box>
                <Image
                  m={"auto"}
                  src="https://assets.milaap.org/assets/home/medical-icon-22eba5bcdf629bb6e4244cdaab2d40c12e2e5fa63b83d27654423737ef4319ca.png"
                  mt={"8%"}
                />
                <br />
                <Text as={"b"}>Medical</Text>
              </Box>
            </Tab>
            <Tab
              h={"150px"}
              w={"190px"}
              _selected={{ color: "white", bg: "#691a47" }}
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Box>
                <Image
                  m={"auto"}
                  src="https://assets.milaap.org/assets/home/memorial-icon-d649fd768074bb5124e32420e406bb00b1524ee5d277747db46964e82ad914bb.png"
                  mt={"8%"}
                />
                <br />
                <Text as={"b"}>Memorials</Text>
              </Box>
            </Tab>
            <Tab
              h={"150px"}
              w={"180px"}
              _selected={{ color: "white", bg: "#691a47" }}
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Menu isLazy>
                <MenuButton>
                  <Box>
                    <Image
                      m={"auto"}
                      src="https://assets.milaap.org/assets/home/all-icon-c540de74d815e7275a4bbebda41374b9fc528ba1a5791d71cd28c73ab27fdcd7.png"
                      mt={"8%"}
                    />
                    <br />
                    <Text as={"b"}>Others</Text>
                  </Box>
                </MenuButton>
                <MenuList color={"black"}>
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem>Education</MenuItem>
                  <MenuItem>Emergencies</MenuItem>
                  <MenuItem>Children</MenuItem>
                  <MenuItem>Animals</MenuItem>
                  <MenuItem>Sports</MenuItem>
                  <MenuItem>Community</MenuItem>
                  <MenuItem>Elderly</MenuItem>
                  <MenuItem>Arts & Media</MenuItem>
                  <MenuItem>Women</MenuItem>
                  <MenuItem>Technology</MenuItem>
                  <MenuItem>Environment</MenuItem>
                  <MenuItem>Human Rights</MenuItem>
                </MenuList>
              </Menu>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HomeDonate s="1" e="6" />
            </TabPanel>
            <TabPanel>
              <HomeDonate s="7" e="12" />
            </TabPanel>
            <TabPanel>
              <HomeDonate s="13" e="18" />
            </TabPanel>
            <TabPanel>
              <HomeDonate s="19" e="24" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </Box>
  );
};

export default HomePageFund;
