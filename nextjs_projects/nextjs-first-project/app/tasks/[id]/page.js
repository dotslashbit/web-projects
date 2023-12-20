import Link from "next/link";
import React from "react";
import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default SingleTaskPage;
