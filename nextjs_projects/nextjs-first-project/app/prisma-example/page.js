import Link from "next/link";
import React from "react";

import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className="text-7xl">PrismaExample Page</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            ✅{task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExamplePage;
