import { deleteExpiredFiles } from "@/app/_src/actions/jsdocGenerate";

export async function GET() {
	const result = await deleteExpiredFiles();
	return Response.json({ result: result ? "OK" : "Error" });
}
