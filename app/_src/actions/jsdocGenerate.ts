"use server";

import {
	createDirectory,
	deleteDirectory,
	deleteFile,
	getAllFiles,
	readFile,
	writeFileSync,
} from "@/app/_src/actions/io";
import { dateToTimestamp } from "@/app/_src/helpers/time";
import { execSync } from "child_process";
import JSDom from "jsdom";

const ExpiredMinutes = 30;
const ExpiredMinutesInTimestamp = ExpiredMinutes * 60 * 1000;
const RawDirectory = "./jsdoc/raw";
const BuildDirectory = "./jsdoc/build";

export const jsdocGenerate = async (text: string) => {
	const date = dateToTimestamp(new Date());

	createDirectory("./jsdoc");
	// createDirectory("./jsdoc/raw");
	// createDirectory("./jsdoc/build");

	return;

	const writeResult = writeFileSync({
		directory: RawDirectory,
		fileName: `${date}`,
		text,
	});

	if (!writeResult) {
		console.error("Failed to write file");
		return false;
	}

	const createResult = execSync(
		`jsdoc ${RawDirectory}/${date}.js -d ${BuildDirectory}/${date}`,
	);

	if (!createResult) {
		console.error("Failed to create file");
		return false;
	}

	return date;
};

export const deleteExpiredFiles = async () => {
	const date = dateToTimestamp(new Date());

	const allFiles = await getAllFiles(RawDirectory);
	if (!allFiles) return false;

	const allFilesTimestamp = allFiles
		.filter((f) => f !== ".gitkeep")
		.map((f) => parseInt(f.replace(".js", ""), 10));

	const expired = allFilesTimestamp.filter(
		(t) => date - t > ExpiredMinutesInTimestamp,
	);

	for (const e of expired) {
		deleteFile(`${RawDirectory}/${e}.js`);
		deleteDirectory(`${BuildDirectory}/${e}`);
	}
	return true;
};

export const readJsDocFile = async ({
	id,
	file = "index.html",
}: { id: string; file?: string }) => {
	const html = readFile(`${BuildDirectory}/${id}/${file}`);
	if (!html) return false;

	return replaceUrl(html, id);
};

const replaceUrl = (html: string, id: string) => {
	const dom = new JSDom.JSDOM(html);
	const document = dom.window.document;
	const links = document.querySelectorAll("a");
	for (const link of links) {
		const href = link.getAttribute("href");
		if (href) {
			link.setAttribute("href", `/generated/${id}/${href}`);
		}
	}

	const scripts = document.querySelectorAll("script");
	for (const script of scripts) {
		const src = script.getAttribute("src");
		if (src) {
			script.setAttribute("src", `/${src}`);
		}
	}

	const cssLinks = document.querySelectorAll("link");
	for (const link of cssLinks) {
		const href = link.getAttribute("href");
		if (href) {
			link.setAttribute("href", `/${href}`);
		}
	}

	return dom.serialize();
};
