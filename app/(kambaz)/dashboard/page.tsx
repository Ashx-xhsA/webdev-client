"use client";

import { useCallback, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { isEnrolled, useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const setEnrollments = useEnrollmentsStore((state) => state.setEnrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const { currentUser } = useAccountContext();

  const loadCourses = useCallback(async () => {
    try {
      setCourses(
        currentUser && !showAllCourses
          ? await client.findMyCourses()
          : await client.fetchAllCourses(),
      );
    } catch {
      setCourses([]);
    }
  }, [currentUser, showAllCourses, setCourses]);

  const loadEnrollments = useCallback(async () => {
    try {
      setEnrollments(await client.findAllEnrollments());
    } catch {
      setEnrollments([]);
    }
  }, [setEnrollments]);

  useEffect(() => {
    loadCourses();
    loadEnrollments();
  }, [loadCourses, loadEnrollments]);

  const onAddCourse = async () => {
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
    await loadEnrollments();
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
  };

  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
  };

  const onToggleEnrollment = async (courseId: string, enrolled: boolean) => {
    if (!currentUser) return;
    if (enrolled) {
      await client.unenrollFromCourse(currentUser._id, courseId);
      unenroll(currentUser._id, courseId);
    } else {
      enroll(await client.enrollIntoCourse(currentUser._id, courseId));
    }
    await loadCourses();
  };

  return (
    <div id="wd-dashboard">
      <h1
        id="wd-dashboard-title"
        className="flex items-center justify-between"
      >
        Dashboard
        <span className="flex gap-2">
          {currentUser && (
            <button
              type="button"
              id="wd-enrollments-btn"
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Enrollments
            </button>
          )}
          <button
            type="button"
            id="wd-enrollments-toggle"
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="rounded border border-blue-600 px-3 py-1.5 text-sm font-medium text-blue-600"
          >
            {showAllCourses ? "Sample: My Courses" : "Sample: All Courses"}
          </button>
        </span>
      </h1>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => {
          const enrolled = currentUser
            ? isEnrolled(enrollments, currentUser._id, c._id)
            : false;
          return (
            <CourseCard
              key={c._id}
              {...c}
              onEdit={() => setCourse(c)}
              onDelete={() => onDeleteCourse(c._id)}
              enrolled={enrolled}
              onToggleEnrollment={
                currentUser
                  ? () => onToggleEnrollment(c._id, enrolled)
                  : undefined
              }
            />
          );
        })}
      </div>
    </div>
  );
}