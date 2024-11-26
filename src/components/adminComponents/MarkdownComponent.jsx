import React, { useState } from 'react';
import { MDXEditor } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    toolbarPlugin,
    BoldItalicUnderlineToggles,
    UndoRedo,
    InsertImage,
    imagePlugin,
    ListsToggle,
} from '@mdxeditor/editor';
import ReactMarkdown from 'react-markdown';
import { marked } from 'marked';
const MarkdownComponent = () => {
    // State to manage editor content
    const [markdown, setMarkdown] = useState('**Welcome** to MDXEditor!');

    return (
        <div style={{ padding: '20px' }}>
            <h2>Editable MDXEditor Example</h2>

            <MDXEditor
                markdown={markdown} // Pass the current content
                onChange={setMarkdown} // Update content as the user edits
                plugins={[
                    headingsPlugin(), // Adds support for headings
                    listsPlugin(), // Adds support for ordered/unordered lists
                    quotePlugin(), // Adds support for block quotes
                    thematicBreakPlugin(), // Adds support for horizontal rules
                    markdownShortcutPlugin(), // Allows markdown shortcuts
                    imagePlugin({
                        // upload images from local clients
                        imageUploadHandler: () => {
                            return Promise.resolve('https://picsum.photos/200/300')
                        },
                        // get list exist images from server
                        imageAutocompleteSuggestions: ['https://picsum.photos/200/300', 'https://picsum.photos/200']
                    }),
                    toolbarPlugin({
                        toolbarClassName: 'custom-toolbar',
                        toolbarContents: () => (
                            <>
                                <InsertImage />
                                <UndoRedo />
                                {/* <UndoRedo /> Undo/Redo functionality */}
                                <BoldItalicUnderlineToggles /> {/* Formatting toggles */}
                                <ListsToggle />
                            </>
                        ),
                    }),
                ]}
            />

            {/* Display Markdown */}
            <h3>Markdown Output:</h3>
            <pre style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
                {markdown}
            </pre>
            <h3>Live Preview</h3>
            <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            <h3>Live html</h3>
            <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
                {marked(markdown)}
            </div>
        </div>
    );
};

export default MarkdownComponent;