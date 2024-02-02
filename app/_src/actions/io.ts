import fs from "fs";

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
		console.error(e);
		return false;
	}
};

export const getAllFiles = (dirPath: string) => {
	try {
		return fs.readdirSync(dirPath).map((f) => f);
	} catch (e) {
		console.error(e);
		return false;
	}
};

export const readFile = (filePath: string) => {
	try {
		return fs.readFileSync(filePath).toString();
	} catch (e) {
		console.error(e);
		return false;
	}
};

export const deleteFile = (filePath: string) => {
	try {
		fs.unlinkSync(filePath);
		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
};

export const deleteDirectory = (dirPath: string) => {
	try {
		fs.rmSync(dirPath, { recursive: true, force: true });
		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
};
