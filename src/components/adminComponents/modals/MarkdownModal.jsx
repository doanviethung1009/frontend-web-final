import { MDXEditor } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import { Descriptions, Modal } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

const MarkdownModal = (props) => {
    const { markdown, setMarkdown, isModalOpen, setIsModalOpen, form, editingIndex, parentIndex } = props

    const handleOk = () => {
        // const currentData = form.getFieldValue(['tourDetailEN', editingIndex]) || {};
        console.log("parent index", parentIndex)
        console.log("editingIndex index", editingIndex)
        const currentData = form.getFieldValue([`${parentIndex}`, editingIndex]) || {};
        console.log('currentData', currentData)
        const updatedData = {
            ...currentData,
            description: markdown, // Add or update the description field
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