import Link from 'next/link';
import * as db from '../../../../database';

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="ml-15">
      <div className="mb-3 ">
        <label htmlFor="wd-name" className="mb-1 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue={assignment?.title ?? ''}
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
        <div id="wd-assignment-id" className="mt-1 text-sm text-neutral-500">
          Assignment id: {aid}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="mb-1 block font-medium">
          Assignment Description
        </label>
        <textarea
          id="wd-description"
          defaultValue={assignment?.description ?? ''}
          rows={8}
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>
      <div className="grid grid-cols-[150px_1fr]  items-start gap-x-4 gap-y-3">
        <label htmlFor="wd-points" className="pt-1.5 text-right">
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={assignment?.points ?? 100}
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />

        <label htmlFor="wd-group" className="pt-1.5 text-right">
          Assignment Group
        </label>
        <select
          id="wd-group"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className="pt-1.5 text-right">
          Display Grade As
        </label>
        <select
          id="wd-display-grade-as"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        >
          <option value="POINTS">POINTS</option>
          <option value="PERCENTAGE">PERCENTAGE</option>
          <option value="LETTER_GRADE">LETTER GRADE</option>
          <option value="PASS_FAIL">PASS/FAIL</option>
        </select>

        <label htmlFor="wd-submission-type" className="pt-1.5 text-right">
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-3">
          <select
            id="wd-submission-type"
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-1.5"
          >
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
          </select>
          <div className="mb-2 font-medium">Online Entry Options</div>
          <div className="flex flex-col gap-2">
            <label htmlFor="wd-text-entry" className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" />
              Text Entry
            </label>
            <label htmlFor="wd-website-url" className="flex items-center gap-2">
              <input type="checkbox" id="wd-website-url" />
              Website URL
            </label>
            <label
              htmlFor="wd-media-recordings"
              className="flex items-center gap-2"
            >
              <input type="checkbox" id="wd-media-recordings" />
              Media Recordings
            </label>
            <label
              htmlFor="wd-student-annotation"
              className="flex items-center gap-2"
            >
              <input type="checkbox" id="wd-student-annotation" />
              Student Annotation
            </label>
            <label htmlFor="wd-file-upload" className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" />
              File Uploads
            </label>
          </div>
        </div>

        <span className="pt-1.5 text-right">Assign</span>
        <div className="rounded border border-neutral-300 p-3">
          <label htmlFor="wd-assign-to" className="mb-1 block font-medium">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-1.5"
          />

          <label htmlFor="wd-due-date" className="mb-1 block font-medium">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue={assignment?.due}
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-1.5"
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="wd-available-from"
                className="mb-1 block font-medium"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue={assignment?.available}
                className="w-full rounded border border-neutral-300 px-3 py-1.5"
              />
            </div>
            <div>
              <label
                htmlFor="wd-available-until"
                className="mb-1 block font-medium"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
                className="w-full rounded border border-neutral-300 px-3 py-1.5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <label htmlFor="wd-ai-editor-notes" className="mb-1 block font-medium">
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>
      <hr />
      <div className="flex justify-end gap-2 ">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border bg-gray-200 px-3 py-1.5 text-sm text-black"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border bg-red-600 px-3 py-1.5 text-sm text-white"
        >
          Save
        </Link>
      </div>
    </div>
  );
}