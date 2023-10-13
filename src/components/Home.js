import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container marginTop={20} backgroundColor="orange.100" padding={2}>
        <Heading size="3xl" textAlign="center" marginBottom={10}>
          List of Users
        </Heading>
        {data.map((details, id) => {
          return (
            <Accordion allowMultiple key={id}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <HStack>
                        <Text fontSize="xl">{details.name}</Text>
                      </HStack>
                    </Box>

                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack>
                    <HStack justify="space-between">
                      <Text as="b">Username </Text>
                      <Text>{details.username}</Text>
                    </HStack>

                    <HStack justify="space-between">
                      <Text as="b">E-Mail </Text>
                      <Text>{details.email}</Text>
                    </HStack>

                    <HStack justify="space-between">
                      <HStack>
                        <Text as="b">Address </Text>
                      </HStack>
                      <HStack>
                        <Text> {details.address.street}</Text>
                        <Text>, {details.address.suite}</Text>
                        <Text>, {details.address.city}</Text>
                      </HStack>
                    </HStack>

                    <HStack justify="space-between">
                      <Text as="b">Zipcode </Text>
                      <Text>{details.address.zipcode}</Text>
                    </HStack>

                    <HStack justify="space-between">
                      <Text as="b">Phone </Text>
                      <Text>{details.phone}</Text>
                    </HStack>

                    <HStack justify="space-between">
                      <Text as="b">Website </Text>
                      <Text> {details.website}</Text>
                    </HStack>

                    <HStack justify="space-between">
                      <Text as="b">Company Name </Text>
                      <Text>{details.company.name}</Text>
                    </HStack>

                    <HStack justify="space-between">
                      <Text as="b">CatchPhrase </Text>
                      <Text>{details.company.catchPhrase}</Text>
                    </HStack>

                    <HStack justify="space-between">
                      <Text as="b">Business Services </Text>
                      <Text>{details.company.bs}</Text>
                    </HStack>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
        <Text color="red" mt={6} fontSize="md">
          * Click on <ChevronDownIcon /> to view more details{" "}
        </Text>
      </Container>
    </>
  );
};

export default Home;
