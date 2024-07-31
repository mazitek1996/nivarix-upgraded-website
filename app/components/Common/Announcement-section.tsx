import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function AnnouncementBar() {
  return (
    <div>
      {/* Announcement Section */}
      <div className="sticky top-0 bg-red-50 text-red-800 h-12 text-center px-6 py-2 rounded-bl-xl rounded-br-xl flex justify-center items-center z-50">
        <Link href="/">
          <p className="text-sm flex items-center cursor-pointer">
            <span className="bg-red-200 rounded-md px-2 py-1 mr-3 text-xs font-normal">
              NEW:
            </span>{" "}
            Ballpark gains SOC2 Type II compliance 🎉
            <FiArrowUpRight className="ml-2" />
          </p>
        </Link>
      </div>
    </div>
  );
}
