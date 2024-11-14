import React, { useState, useEffect } from 'react';
import fileDownload from 'js-file-download';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('');
    const [htmlContent, setHtmlContent] = useState('');
    const [markdownItInstance, setMarkdownItInstance] = useState(null);

    useEffect(() => {
        const loadMarkdownIt = async () => {
            const { default: MarkdownIt } = await import('markdown-it');
            setMarkdownItInstance(new MarkdownIt());
        };
        loadMarkdownIt();
    }, []);

    const handleMarkdownChange = (e) => {
        const newMarkdown = e.target.value;
        setMarkdown(newMarkdown);

        if (markdownItInstance) {
            setHtmlContent(markdownItInstance.render(newMarkdown));
        }
    };

    const generateReadmeFile = () => {
        fileDownload(markdown, 'README.md');
    };

    return (
        <div>
            <h2>Markdown Editor</h2>
            <textarea
                value={markdown}
                onChange={handleMarkdownChange}
                placeholder="Enter markdown here..."
                style={{ width: '100%', height: '200px', marginBottom: '20px' }}
            />
            <button onClick={generateReadmeFile} style={{ marginBottom: '20px' }}>
                Generate README.md
            </button>
            <div>
                <h3>Preview:</h3>
                <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    style={{ border: '1px solid #ccc', padding: '10px' }}
                />
            </div>
        </div>
    );
};

export default MarkdownEditor;
