import appRootPath from "app-root-path";
import axios from "axios";
import fs from "fs";
import path from "path";
import { url } from "../constants/url";

export const getGods = async () => {
  const gods = await axios.get(url.gods);
  const filePath = path.resolve(appRootPath.path, "src", "assets", "gods.json");
  const godsJson = JSON.stringify(gods.data, undefined, "  ");
  fs.writeFileSync(filePath, godsJson);
};

getGods();
