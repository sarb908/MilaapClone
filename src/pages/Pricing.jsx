import React, { useState } from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Button as StyledButton,
  Image,
  Heading,
  Text,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";
import pricinfImg from "./../assets/pricingPage.PNG";
import Footer from "../components/Footer";
const GoalEstimatorTitle = styled.div`
  margin: 4% 3% 3%;

  P {
    font-size: 18px;
    margin: 0.5% 0;
    letter-spacing: 0.4px;
    word-spacing: 0.3px;
    color: #848484;
  }
`;

const SliderDiv = styled.div`
  margin: 2% 24% 1%;

  > div {
    h3 {
      font-size: 14px;
      margin-bottom: 15px;
    }

    > div {
      background: #fff;
      padding: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      display: flex;
      align-items: center;

      > div:nth-child(1) {
        flex: 1;
        padding: 10px 20px;
      }
      > div:nth-child(2) {
        display: flex;
        padding: 5px 0;
        > div {
          margin: 2px;
        }
        select {
          border-bottom: 1px solid black;
          outline: none;
        }
        input {
          border-bottom: 1px solid black;
          outline: none;
        }
      }
    }
  }

  > div:nth-child(2) {
    margin-top: 60px;

    p {
      font-size: 10px;
      font-weight: 500;
      color: #848484;
      padding: 5px 25px 0 0;
    }

    input {
      width: 26px;
      text-align: center;
    }
  }
`;

const EstimateGoal = styled.div`
  margin: 0 0 3.5%;
  button {
    background: #9c3353;
    color: #fff;
    border-radius: 50px;
    font-size: 14px;
    letter-spacing: 0.5px;
    word-spacing: 0.4px;
    padding: 25px 95px;
    margin-top: 30px;

    :hover {
      background: #9c3353;
    }
  }
`;

const PricingFAQ = styled.div`
  padding: 5% 10%;
  margin: 2% 0;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  > div {
    margin-bottom: 10px;

    h1 {
      text-align: left;
      font-size: 18px;
      padding-bottom: 20px;
    }

    span {
      text-decoration: underline;
    }
  }
`;

const TextDiv = styled.div`
  color: #939393;
  font-size: 12px;
`;

const initState = {
  value: 100000,
  percentage: 70,
  currency: "INR",
};

const StyledAccordian = styled(Accordion)`
  .chakra-accordion__button:focus {
    box-shadow: none;
  }
`;

const Pricing = () => {
  const [query, setQuery] = useState(initState);
  const [estimate, setEstimate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  return (
    <>
      <div style={{ backgroundColor: "", height: "100%" }}>
        <div>
          <Flex mt="60px" h="400px" w="100%" bg="#9c3353">
            <Box w="50%" h="100%">
              <Image fit="cover" src={pricinfImg} alt="img" />
            </Box>
            <VStack
              justify="center"
              alignItems={"start"}
              gap="10px"
              textAlign={"left"}
              w="50%"
              h="100%"
              color="white"
            >
              <Heading fontSize="30px" fontWeight={"400"}>
                FREE FUNDRAISING FOR ALL!
              </Heading>
              <Heading fontSize="30px" fontWeight={"400"}>
                0% PLATFORM FEES
              </Heading>
              <hr style={{ border: "1px solid white", width: "90vh" }} />
              <Text fontSize="24px" fontWeight={"400"}>
                RAISE MAXIMUM FUNDS FOR THE CAUSE YOU CARE ABOUT
              </Text>
              <hr style={{ border: "1px solid white", width: "90vh" }} />

              <Button
                fontSize="20px"
                bg="white"
                borderRadius={"15px"}
                color="#9c3353"
                fontWeight={"400"}
                p="0 16px"
              >
                Start a fundraiser
              </Button>
            </VStack>
          </Flex>
          <GoalEstimatorTitle>
            <Text fontSize="30px" fontWeight={"400"}>
              Fundraiser Goal Calcukator
            </Text>
            <p>
              Check detailed breakup & plan how much you would like to raise
            </p>
          </GoalEstimatorTitle>
          <SliderDiv>
            <div>
              <h3>I want to raise about</h3>
              <div>
                <div>
                  <Slider
                    value={query.value}
                    min={10000}
                    max={10000000}
                    colorScheme="#e6e6e6"
                    defaultValue={100000}
                    onChange={(value) => setQuery({ ...query, value: value })}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={6} background="#9c3353" />
                  </Slider>
                </div>
                <div>
                  <div>
                    <select
                      value={query.currency}
                      name="currency"
                      onChange={handleChange}
                    >
                      <option value="INR">&#8377; INR</option>
                      <option value="USD">$ USD</option>
                    </select>
                  </div>
                  <div>
                    <input
                      value={query.value}
                      name="value"
                      min="10000"
                      max="10000000"
                      onChange={handleChange}
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>& I believe, INR contributions might total to</h3>
              <div>
                <div>
                  <Slider
                    value={query.percentage}
                    min={0}
                    max={100}
                    colorScheme="#e6e6e6"
                    defaultValue={70}
                    onChange={(value) =>
                      setQuery({ ...query, percentage: value })
                    }
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={6} background="#9c3353" />
                  </Slider>
                </div>
                <div>
                  <div>
                    <input
                      value={query.percentage}
                      name="percentage"
                      onChange={handleChange}
                      type="number"
                    />
                  </div>
                  <div>
                    <p>% of all funds raised</p>
                  </div>
                </div>
              </div>
            </div>
          </SliderDiv>
          <EstimateGoal>
            <StyledButton onClick={() => setEstimate(!estimate)}>
              {estimate ? "Close Estimation" : "Estimate goal"}
            </StyledButton>
          </EstimateGoal>
          {estimate && (
            <Flex h="250px" w="100" bg="#9c3353" color="" white>
              <Flex
                color="white"
                alignItems="center"
                gap="10px"
                textAlign="left"
                justify="center"
                w="100%"
              >
                <Box>
                  <Text size="34px">
                    Consider setting a goal amount of approx.
                  </Text>
                  <Text size="34px">
                    <span>
                      {query.currency === "INR" ? <span>&#8377;</span> : "$"}
                    </span>
                    <span>
                      {query.currency === "INR"
                        ? (
                            query.value +
                            query.value * (query.percentage / 100) * 0.0332
                          ).toFixed(2)
                        : Math.round(10000 / 70)}
                    </span>
                  </Text>
                </Box>
              </Flex>
              <Center color="white" textAlign="left" w="100%">
                <Flex alignItems="center" justify="space-around">
                  <VStack alignItem="end" justify="space-around">
                    <p>
                      Want to raise (
                      <span>
                        {query.currency === "INR" ? <span>&#8377;</span> : "$"}
                      </span>
                      ) :
                    </p>
                    <p>
                      Milaap platform fee (
                      <span>
                        {query.currency === "INR" ? <span>&#8377;</span> : "$"}
                      </span>
                      ) :
                    </p>
                    <p>
                      Payment Gateway charges (
                      <span>
                        {query.currency === "INR" ? <span>&#8377;</span> : "$"}
                      </span>
                      ) :
                    </p>
                  </VStack>
                  <VStack alignItem="start" justify="space-around">
                    <p>{query.value}</p>
                    <p>0</p>
                    <p>
                      {(
                        query.value *
                        (query.percentage / 100) *
                        0.0332
                      ).toFixed(2)}
                    </p>
                  </VStack>
                </Flex>
              </Center>
            </Flex>
          )}
          <PricingFAQ>
            <div>
              <h1>Related FAQs</h1>
            </div>
            <StyledAccordian allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      What are payment gateway charges?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign="left">
                  <TextDiv>
                    Whenever you purchase (eg book tickets) or make an online
                    payment, it needs to be securely processed and verified by a
                    third party payment processor.
                  </TextDiv>
                  <br />
                  <TextDiv>
                    These processors include Banks (for netbanking, IMPS, NEFT,
                    RTGS transactions), Visa, Mastercard, AMEX, Rupay etc (for
                    credit and debit card transactions), Paytm, UPI apps and
                    other payment wallets who charge a small fee for this
                    service (‘payment gateway charges’). These charges on
                    crowdfunding websites are unavoidable.
                  </TextDiv>
                  <br />
                  <TextDiv>
                    This is NOT Milaap fees. These fees go directly to the
                    payment processor and help us keep Milaap a safe place to
                    donate.
                  </TextDiv>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      How much do payment gateways charge for their service?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign="left">
                  <TextDiv>
                    Payment gateways charge their fees as a % of donation amount
                    made. It varies based on the mode of payment and service
                    provider.
                  </TextDiv>
                  <br />
                  <TextDiv>
                    <p>For donations made in Indian Rupees (INR)</p>
                    <p>UPI apps - 0.60%</p>
                    <p>Paytm - 1.77%</p>
                    <p>Debit/Credit cards - 2.18%</p>
                    <p>Netbanking - 2.36%</p>
                    <p>Amazon Pay - 2.71%</p>
                  </TextDiv>
                  <br />
                  <TextDiv>
                    <p>
                      For donations made in US Dollars using a card issued in
                      the USA (USD): 2.9% + 30cents per donation
                    </p>
                    <p>
                      For donations made in other foreign currencies or in USD
                      using a card issued outside the USA: 3.9% + 30cents per
                      donation
                    </p>
                  </TextDiv>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Are there any charges to withdraw funds?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign="left">
                  <TextDiv>
                    Similar to donations, Milaap works with many remittance
                    providers to transfer funds (UPI, IMPS, NEFT, RTGS,
                    International Wire transfers) swiftly and securely. While
                    these providers charge a fee for their service, currently
                    Milaap is covering for this without passing it to the
                    campaign organizers. This means NO charges to withdraw
                    funds.
                  </TextDiv>
                  <br />
                  <TextDiv>
                    Please use the fundraiser estimator above to find out the
                    exact breakup of funds raised and received.
                  </TextDiv>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      How does Milaap sustain itself?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign="left">
                  <TextDiv>
                    You might be wondering, “What percentage does Milaap take?“
                    or “Does Milaap make any money?” We have a 0% platform fee.
                    We rely on the generosity of our users to power the
                    platform.
                  </TextDiv>
                  <br />
                  <TextDiv>
                    10 years into our journey, we are taking the belief in our
                    community to the next level. With this 0% platform fee, we
                    are incredibly grateful for the voluntary tips from our
                    users to help with the costs associated with paying our
                    dedicated employees, providing our best-in-class customer
                    service, trust & safety protections, and social fundraising
                    technology.
                  </TextDiv>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Is the free fundraising applicable for organizations and
                      not-for-profits?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign="left">
                  <TextDiv>
                    Yes, Milaap charges NO platform fees for individuals, NGOs
                    and organizations alike. In fact, organizations with 80G
                    tax-exempt status also have the option to either issue
                    tax-exemption receipts from Milaap's dashboard or issue it
                    separately. Receipts to donors from Milaap's dashboard can
                    be issued, at a click of a button. This feature is FREE to
                    use and entails NO FEES.
                  </TextDiv>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Does Milaap help in outreach of campaigns?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign="left">
                  <TextDiv>
                    Over 95% of Milaap’s campaigns which have raised money do it
                    for FREE using our best-in-class social fundraising
                    technology and round-the-clock assistance and support from
                    our relationship managers.
                  </TextDiv>
                  <br />
                  <TextDiv>
                    In certain scenarios, where the beneficiaries come from a
                    disadvantaged backgrounds with no digital literacy,
                    exhausted most of their finances with no other sources
                    available and require funds very urgently; Milaap may
                    consider them on a case-by-case basis for outreach on social
                    media and digital promotion platforms after verification and
                    a signed request letter from the beneficiary. This is
                    subject to availability of our team members, and situations
                    where we beleive promotions can achieve something
                    significant for the cause.
                  </TextDiv>
                  <br />
                  <TextDiv>
                    Similar to payment gateway costs where it's paid to payment
                    processor, outreach costs are paid towards social media and
                    digital promotion platforms. To ensure that donor money goes
                    primarily to the intended purpose, we cap the outreach costs
                    to not more than 15% of funds raised.
                  </TextDiv>
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </StyledAccordian>
          </PricingFAQ>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Pricing;
