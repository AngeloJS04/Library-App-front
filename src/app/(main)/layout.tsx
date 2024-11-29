"use client";
import Layout from "@/components/layout/main";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div lang="en" className="h-full">
            <Layout>{children}</Layout>
        </div>
    );
}
