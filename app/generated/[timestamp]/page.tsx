import { readJsDocFile } from "@/app/_src/actions/jsdocGenerate";

const initialize = (timestamp: string) => {
  return readJsDocFile({ id: timestamp });
};

const GeneratedPage = async ({
  params: { timestamp },
}: {
  params: { timestamp: string };
}) => {
  const html = await initialize(timestamp);
  if (!html) {
    return <div>not found</div>;
  }

  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default GeneratedPage;
