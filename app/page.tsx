"use client";

import React from "react";
import { createClient } from '@supabase/supabase-js';
import { FaGithub } from "react-icons/fa";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error("Missing Supabase environment variables");
  }
  
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
export default function Page() {

    async function LogInUser(){
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'https://humble-space-journey-979vv7jg44xjfvjj-3000.app.github.dev/dashboard', // Make sure this is your Codespace URL
            },
        })

        if(error){
            console.log(error);
        }

    }
    return (
        <div className="flex flex-row justify-between p-3">
            <h1>Fordevs</h1>

            <div className="flex flex-row justify-between lg:w-2/5 items-center">
                <a>Challenges</a>
                <a>Solutions</a>
                <button className=" flex flex-row items-center px-10 py-3 rounded bg-black text-white"
                onClick={LogInUser}
                >
                    Login with GitHub
                    <FaGithub className="ml-2" />
                </button>
            </div>
        </div>
    )
  }