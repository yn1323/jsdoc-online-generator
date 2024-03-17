import fs from "fs";

export const createDirectory = (dirPath: string) => {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    return true;
  } catch (e) {
    console.log("createDirectory Error");
    console.error(e);
    return false;
  }
};

export const writeFileSync = ({
  text,
  fileName,
  directory,
}: {
  text: string;
  fileName: string;
  directory: string;
}) => {
  try {
    fs.writeFileSync(`${directory}/${fileName}.js`, text);
    return true;
  } catch (e) {
    console.log("writeFileSync Error");
    console.error(e);
    return false;
  }
};

export const getAllFiles = (dirPath: string): string[] | false => {
  try {
    return fs.readdirSync(dirPath).map((f: string) => f);
  } catch (e) {
    console.log("getAllFiles Error");
    console.error(e);
    return false;
  }
};

export const readFile = (filePath: string) => {
  try {
    return fs.readFileSync(filePath).toString();
  } catch (e) {
    console.log("readFile Error");
    console.error(e);
    return false;
  }
};

export const deleteFile = (filePath: string) => {
  try {
    fs.unlinkSync(filePath);
    return true;
  } catch (e) {
    console.log("deleteFile Error");
    console.error(e);
    return false;
  }
};

export const deleteDirectory = (dirPath: string) => {
  try {
    fs.rmSync(dirPath, { recursive: true, force: true });
    return true;
  } catch (e) {
    console.log("deleteDirectory Error");
    console.error(e);
    return false;
  }
};
