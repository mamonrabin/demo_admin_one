"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { FaBold, FaItalic, FaUnderline, FaListUl, FaListOl } from "react-icons/fa";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function TiptapEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm md:max-w-none w-full focus:outline-none min-h-[120px] px-3 py-2",
      },
    },
    immediatelyRender: false, // Prevent SSR issues
  });

  if (!editor) return null;

  return (
    <div className="border rounded bg-white">
      {/* Toolbar */}
      <div className="flex gap-2 p-2 border-b bg-gray-50 w-full">
        {/* Headings */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className="px-2 py-1 text-sm rounded hover:bg-gray-200"
        >
          Normal
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className="px-2 py-1 text-sm rounded hover:bg-gray-200"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className="px-2 py-1 text-sm rounded hover:bg-gray-200"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className="px-2 py-1 text-sm rounded hover:bg-gray-200"
        >
          H3
        </button>

        {/* Formatting */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="px-2 py-1 text-sm rounded hover:bg-gray-200"
        >
          <FaBold />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="px-2 py-1 text-sm rounded hover:bg-gray-200"
        >
          <FaItalic />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className="px-2 py-1 text-sm rounded hover:bg-gray-200"
        >
          <FaUnderline />
        </button>

        {/* Lists */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="px-2 py-1 text-sm rounded hover:bg-gray-200"
        >
          <FaListUl />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="px-2 py-1 text-sm rounded hover:bg-gray-200"
        >
          <FaListOl />
        </button>
      </div>

      {/* Editor content */}
      <EditorContent editor={editor} className="p-2" />
    </div>
  );
}
