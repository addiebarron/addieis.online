export const idLength = 20;
export const maxTitleLength = 50;

export const jsonSchema = {
  id: String,
  title: String,
  description: String,
  url: String,
  show: Boolean,
  color: String,
  imagesrc: String,
};

export const dbSchema = {
  id: `char(${idLength})`,
  title: `varchar(${maxTitleLength})`,
  description: "text",
  url: "text",
  show: "boolean",
  color: "varchar(7)", // hex
  imagesrc: "text",
};
