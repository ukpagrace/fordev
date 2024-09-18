import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Page() {
    return (
        <div className="flex flex-row justify-between p-3">
            <h1>Fordevs</h1>

            <div className="flex flex-row justify-between lg:w-2/5 items-center">
                <a>Challenges</a>
                <a>Solutions</a>
                <button className=" flex flex-row items-center px-10 py-3 rounded bg-black text-white">
                    Login with GitHub
                    <FaGithub className="ml-2" />
                </button>
            </div>
        </div>
    )
  }