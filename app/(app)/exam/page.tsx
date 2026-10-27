import { getSession } from "@/lib/auth";
import { getExamStatus } from "@/lib/exam";
import { ExamView } from "@/components/exam/ExamView";
import { getLang } from "@/lib/lang-server";

export default async function ExamPage() {
  const session = await getSession();
  const status = await getExamStatus(session!.userId, await getLang());
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <ExamView status={status} />
    </div>
  );
}
