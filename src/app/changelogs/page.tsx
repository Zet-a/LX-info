"use client";

import React, { useEffect, useState } from 'react';
import markdownit from 'markdown-it';
import './hljs.css'

import hljs from './highlight.min.js';

export default function Changelogs() {
    /*const md = markdownit();
    const [changelogText, setChangelogText] = useState('');
    <div className="p-3">
        {md.render(changelogText)}
    </div>
    */

    async function request_func(url: string) {
        const r = await fetch(url);
        const t = await r.text()
        return t?.toString();
    }

    const entityMap: { [key: string]: string } = {
    // "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
    };

    function escapeHtml(string: string) {
        return String(string).replace(/[&<>"'`=\/]/g, function(s) {
            return entityMap[s];
        });
    }

    function highlightall() {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
            block.innerHTML = block.innerHTML.replaceAll('&lt;br&gt;', '\n')
        });
        hljs.highlightAll()
    }

    function setCodeText(text: string) {
        const element = document.querySelector("#changelog_code")
        if (!element) return;
        element.textContent = text;
        highlightall()
    }

    function setTitleText(text: string) {
        const element = document.querySelector("#changelog_title")
        if (!element) return;
        element.textContent = text;
    }

    useEffect(() => {
        const fixString = (s: string) => {
            return s.replaceAll(" ", "").replaceAll("%20", "").replaceAll("\n", "").replaceAll("\r", "");
        }

        const loadChangelog = async () => {
            setCodeText("Loading...");

            let changelog = await request_func("/changelogs.md");
            if (typeof(changelog) == 'object') { changelog = "- Failed to get changelog!"; } else { setTitleText("Changelogs"); }

            setCodeText(changelog);
        }

        loadChangelog()
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <main className="relative container">
            <div className="flex flex-col justify-center items-center h-[calc(100vh-50px)]">
                <h1 className="text-3xl" id="changelog_title">Changelogs</h1>
                <pre className="text-left language-diff border border-border/90 rounded w-[50vw] mt-3">
                    <code style={{background: 'none !important', color: "hsl(var(--primary))"}} id="changelog_code" className="language-diff hljs"></code>
                </pre>
            </div>
        </main>
    );
}