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

const HomePageFund = () => {
  return (
    <div>
      <Box mt={"12%"} mb={"4%"}>
        <Text as={"b"} fontSize={"22px"}>
          Thousands are fundraising online on Milaap
        </Text>
      </Box>
      <Center>
        <Tabs variant="unstyled">
          <TabList gap={"4%"}>
            <Tab
              h={"150px"}
              w={"190px"}
              _selected={{ color: "white", bg: "#691a47" }}
              bgImg={
                "url('https://cimages.milaap.org/milaap/image/upload/v1656419855/Black_flood_1_gvivow.png')"
              }
              bgRepeat={"no-repeat"}
              bgPos={"center"}
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Image src="https://cimages.milaap.org/milaap/image/upload/v1656419855/White_flood_1_obikdx.png" />
              <Text></Text>
            </Tab>
            <Tab
              h={"150px"}
              w={"180px"}
              _selected={{ color: "white", bg: "#691a47" }}
              bgImg={
                "url('https://assets.milaap.org/assets/home/medical-icon-22eba5bcdf629bb6e4244cdaab2d40c12e2e5fa63b83d27654423737ef4319ca.png')"
              }
              bgRepeat={"no-repeat"}
              bgPos={"center"}
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Image src="https://assets.milaap.org/assets/home/medical-transparent-icon-a9adecab3167c41605eb773b11fdc423c7e27cd3918e50cd0aa0b1781640e748.png" />
            </Tab>
            <Tab
              h={"150px"}
              w={"180px"}
              _selected={{ color: "white", bg: "#691a47" }}
              bgImg={
                "url('https://assets.milaap.org/assets/home/memorial-icon-d649fd768074bb5124e32420e406bb00b1524ee5d277747db46964e82ad914bb.png')"
              }
              bgRepeat={"no-repeat"}
              bgPos={"center"}
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Image src="https://assets.milaap.org/assets/home/memorial-transparent-icon-853c64d1299d9d300554a4bce17164bcf7e9ca3af8e99981ce23cf8822e8624f.png" />
            </Tab>
            <Tab
              h={"150px"}
              w={"180px"}
              _selected={{ color: "white", bg: "#691a47" }}
              bgImg={
                "url('https://assets.milaap.org/assets/home/all-icon-c540de74d815e7275a4bbebda41374b9fc528ba1a5791d71cd28c73ab27fdcd7.png')"
              }
              bgRepeat={"no-repeat"}
              bgPos={"center"}
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Menu isLazy>
                <MenuButton>
                  <Image src="https://assets.milaap.org/assets/home/all-transparent-icon-fcf68b3f1f58a4a35193630459f762a8a3e2a502804a372d68901d9ea25a443c.png" />
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
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </div>
  );
};

export default HomePageFund;
