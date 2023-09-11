import fs from "fs";
import YAML from "yaml";

let LINKS = null;

export const getLinks = () => {
  if (LINKS === null) {
    console.log("Links has not been loaded into the system. Loading the data now...");
    loadLinks();
  }
  return LINKS;
};

const loadLinks = () => {
  const file = fs.readFileSync('../links.yml', 'utf8');
  LINKS = YAML.parse(file);
};