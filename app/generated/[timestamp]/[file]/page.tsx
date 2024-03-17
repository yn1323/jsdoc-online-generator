import { readJsDocFile } from "@/app/_src/actions/jsdocGenerate";

const initialize = (timestamp: string, file: string) => {
  return readJsDocFile({ id: timestamp, file });
};

const GeneratedPage = async ({
  params: { timestamp, file },
}: {
  params: { timestamp: string; file: string };
}) => {
  const html = await initialize(timestamp, file);
  if (!html) {
    return <div>not found</div>;
  }

  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default GeneratedPage;
