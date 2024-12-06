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
import { Descriptions, Modal } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import { marked } from 'marked';

const MarkdownModal = (props) => {
    const { markdown, setMarkdown, isModalOpen, setIsModalOpen, form, editingIndex, parentIndex } = props

    const handleOk = () => {
        // const currentData = form.getFieldValue(['tourDetailEN', editingIndex]) || {};
        const dataHtml = marked(markdown)

        console.log("parent index", parentIndex)
        console.log("editingIndex index", editingIndex)
        console.log("dataHtml", dataHtml)

        const currentData = form.getFieldValue([`${parentIndex}`, editingIndex]) || {};
        console.log('currentData', currentData)
        const updatedData = {
            ...currentData,
            description: dataHtml, // Add or update the description field
        };
        console.log('update data', updatedData)
        if (parentIndex === "tourDetailVI") {
            form.setFieldsValue({
                tourDetailVI: form.getFieldValue(parentIndex).map((item, index) =>
                    index === editingIndex ? updatedData : item
                ),
            });

        }
        if (parentIndex === "tourDetailEN") {
            form.setFieldsValue({
                tourDetailEN: form.getFieldValue(parentIndex).map((item, index) =>
                    index === editingIndex ? updatedData : item
                ),
            });
        }
        console.log('Updated Form Data:', form.getFieldsValue());
        setMarkdown(null);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setMarkdown(null); // Clear the markdown content
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div>
            <Modal title="Markdown Editor"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                destroyOnClose
                width={800}>
                <div style={{ border: "1px solid red" }}>
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
                </div>

            </Modal>
        </div>
    );
};

//Prop types validation
MarkdownModal.propTypes = {
    markdown: PropTypes.string.isRequired,
    setMarkdown: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    editingIndex: PropTypes.number.isRequired,

};

export default MarkdownModal;