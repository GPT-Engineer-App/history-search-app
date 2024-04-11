import React, { useState } from "react";
import { Box, Heading, Text, VStack, Input, Button, Textarea, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const historicalSources = [
  {
    id: 1,
    title: "Declaration of Independence",
    content: "We hold these truths to be self-evident, that all men are created equal...",
  },
  {
    id: 2,
    title: "Gettysburg Address",
    content: "Four score and seven years ago our fathers brought forth on this continent, a new nation...",
  },
  // Add more historical sources here
];

const Index = () => {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleQuestionSubmit = () => {
    console.log("Question submitted:", question);
    setQuestions([...questions, question]);
    setQuestion("");
  };

  const handleSearch = () => {
    const results = historicalSources.filter((source) => source.content.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  };

  const handleAnswerSubmit = () => {
    // TODO: Implement submitting the answer to the backend
    console.log("Answer submitted:", answer);
    setAnswer("");
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        History Teacher Application
      </Heading>

      <VStack spacing={6} align="stretch">
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Post a Question
          </Heading>
          <Input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter your question" mb={4} />
          <Button onClick={handleQuestionSubmit} colorScheme="blue">
            Submit Question
          </Button>
          {questions.length > 0 && (
            <Box mt={4}>
              <Heading as="h3" size="md" mb={2}>
                Questions:
              </Heading>
              <VStack align="stretch" spacing={2}>
                {questions.map((q, index) => (
                  <Text key={index}>{q}</Text>
                ))}
              </VStack>
            </Box>
          )}
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Search Historical Sources
          </Heading>
          <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter search term" mb={4} />
          <Button onClick={handleSearch} leftIcon={<FaSearch />} colorScheme="teal">
            Search
          </Button>

          <Accordion allowMultiple mt={4}>
            {searchResults.map((source) => (
              <AccordionItem key={source.id}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {source.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{source.content}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Submit Answer
          </Heading>
          <Textarea value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Enter your answer" mb={4} />
          <Button onClick={handleAnswerSubmit} colorScheme="green">
            Submit Answer
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
