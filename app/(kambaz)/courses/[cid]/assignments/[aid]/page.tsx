"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const assignmentId = typeof aid === "string" ? aid : "";
  const isNew = assignmentId === "new";
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === assignmentId),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const router = useRouter();
  const [assignment, setAssignment] = useState<Omit<Assignment, "_id">>(
    existing ?? { ...emptyAssignment, course: courseId },
  );
  const listUrl = `/courses/${courseId}/assignments`;

  const save = () => {
    if (isNew) {
      addAssignment({ ...assignment, course: courseId });
    } else {
      updateAssignment({ ...assignment, _id: assignmentId, course: courseId });
    }
    router.push(listUrl);
  };

  const cancel = () => router.push(listUrl);

  return (
    <div id="wd-assignments-editor" className="ml-15">
      <div className="mb-3 ">
        <label htmlFor="wd-name" className="mb-1 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
        <div id="wd-assignment-id" className="mt-1 text-sm text-neutral-500">
          Assignment id: {isNew ? "(new)" : assignmentId}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="mb-1 block font-medium">
          Assignment Description
        </label>
        <textarea
          id="wd-description"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
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
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: Number(e.target.value) })
          }
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
            value={assignment.due}
            onChange={(e) =>
              setAssignment({ ...assignment, due: e.target.value })
            }
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
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
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
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
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
        <button
          type="button"
          onClick={cancel}
          id="wd-cancel"
          className="rounded border bg-gray-200 px-3 py-1.5 text-sm text-black"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded border bg-red-600 px-3 py-1.5 text-sm text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}