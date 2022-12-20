import { Box,Flex, GridItem, Grid } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
const GitCalender = () => {
    const calender = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 12;
    
        return contributions.filter((day) => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
    
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
  return (
    <Box
      style={{ marginTop: "-10px" }}
      pb="50px"
      // my={'5rem'}
      fontFamily="sans-serif"

      bgGradient="linear(to-r, #0f2040, #203a60, #2c5380)"
      // bg={'teal'}
    >
    <Flex
        marginBottom={"20px"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        justify={"center"}
        pt={"50px"}
        fontWeight={600}
        color="white"
        fontFamily={"Franklin Gothic Medium"}
      >
        <Box  style={{color:"white"}} marginBottom={"20px"} borderBottom="3px solid green" py="5px" textShadow='1px 1px green'>
          Github Calendar
        </Box>
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" w="70%" m="auto" gap={2}>
        <GridItem colSpan={2}>
          <Flex justifyContent={"center"} style={{color:"white"}}>
            <GitHubCalendar username="Swarooptheja" transformData={calender} />
          </Flex>
        </GridItem>
        {/* <GridItem colSpan={["2", "2", "1", "1"]}>
          <img
            height="200px"
            color="black"
            src="https://github-readme-stats.vercel.app/api?username=Swarooptheja&show_icons=true&theme=swift"
            alt="Darsh Star"
          />
        </GridItem> */}
        {/* <GridItem colSpan={["2", "2", "1", "1"]}>
          <img
            height="200px"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Swarooptheja&theme=swift"
            alt="Darshan Star"
          />
        </GridItem> */}
      </Grid>
    </Box>
  );
};

export default GitCalender;
