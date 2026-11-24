"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Lesson from "./Lesson";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import * as client from "../../client";
import {
  useModulesStore,
  type CourseModule,
} from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const modules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  const addModule = useModulesStore((state) => state.addModule);
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const updateModule = useModulesStore((state) => state.updateModule);
  const editModule = useModulesStore((state) => state.editModule);
  const [moduleName, setModuleName] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setModules(await client.findModulesForCourse(courseId));
      } catch {
        setModules([]);
      }
    };
    load();
  }, [courseId, setModules]);

  const onAddModule = async () => {
    if (moduleName.trim() === "") return;
    const created = await client.createModuleForCourse(courseId, {
      name: moduleName,
      description: "",
      lessons: [],
    });
    addModule(created);
    setModuleName("");
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    deleteModule(moduleId);
  };

  const onUpdateModule = async (module: CourseModule) => {
    const saved = await client.updateModule(module);
    updateModule(saved);
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={onAddModule}
      />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            title={
              module.editing ? (
                <input
                  className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
                  defaultValue={module.name}
                  onChange={(e) =>
                    updateModule({ ...module, name: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                />
              ) : (
                module.name
              )
            }
            moduleId={module._id}
            deleteModule={onRemoveModule}
            editModule={editModule}
          >
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
