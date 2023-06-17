import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link href={`/detail/${id}`}>
      <Card key={id} my={4} p={4} cursor="pointer" w="220px" variant="outline" boxShadow="rgba(0, 0, 0, 0.68) 3px 5px 10px -5px">
        <VStack>
          <Heading size={"md"} noOfLines={1}>
            {title} ({year})
          </Heading>
          <Text>Author: {author}</Text>
          <Image w={24} h={24} src={`${image}`} alt={`${id}-${title}`} />
          <Text>
            <span>Publisher: </span>
            {publisher}
          </Text>
        </VStack>
      </Card>
    </Link>
  );
}
