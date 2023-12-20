import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";
import Link from "next/link";
import React from "react";

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
      <h1 className="text-7xl">Tasks Page</h1>
    </div>
  );
};

export default TasksPage;
