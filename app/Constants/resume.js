import fs from "fs";
import YAML from "yaml";

let RESUME = null;

export const getResume = () => {
  if (RESUME === null) {
    console.log("Resume has not been loaded into the system. Loading the data now...");
    loadResume();
  }
  return RESUME;
};

const loadResume = () => {
  const file = fs.readFileSync('../contents.yml', 'utf8');
  RESUME = YAML.parse(file);
};