export type ImageModel = {
  url: string;
  altText: string;
  height: string;
  width: string;
};

export type HeadingModel = {
  text: string;
};

export type ParagraphModel = {
  text: string;
};

export type ListModel = {
  type: 'ordered' | 'unordered';
  items: string[];
};

export type ArticleChild = {
  type: 'heading' | 'image' | 'paragraph' | 'list';
  model: ImageModel | HeadingModel | ParagraphModel | ListModel;
};

export type ArticleBody = ArticleChild[];

export type Article = {
  title: string;
  body: ArticleBody;
};

export type ArticleResponse = {
  article: Article;
  hasMore: boolean;
};
