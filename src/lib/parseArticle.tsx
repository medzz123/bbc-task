import { Box } from '@components/Box';
import List from '@components/List';
import Text from '@components/Text';
import {
  ArticleBody,
  HeadingModel,
  ImageModel,
  ListModel,
  ParagraphModel,
} from '@typings/articles';
import Image from 'next/image';
import React from 'react';

const parseImage = (image: ImageModel, key: string) => {
  return (
    <Box key={key} css={{ center: 'row', marginBottom: '$12' }}>
      <Image src={image.url} alt={image.altText} width={image.width} height={image.height} />
    </Box>
  );
};

const parseHeading = (heading: HeadingModel, key: string) => {
  return (
    <Text key={key} variant="h3">
      {heading.text}
    </Text>
  );
};

const parseParagraph = (paragraph: ParagraphModel, key: string) => {
  return (
    <Text key={key} variant="p">
      {paragraph.text}
    </Text>
  );
};

const parseList = (list: ListModel, key: string) => {
  return <List key={key} type={list.type} items={list.items} />;
};

const parsers = {
  image: parseImage,
  heading: parseHeading,
  paragraph: parseParagraph,
  list: parseList,
};

export const parseArticleBody = (articleBody: ArticleBody) => {
  return articleBody.map((item, index) => {
    const parser = parsers[item.type];

    //@ts-ignore
    const reactNode = parser(item.model, `${item.type}-${index}`);

    return reactNode;
  });
};
