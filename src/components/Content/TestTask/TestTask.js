import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
export const TestTask = () => {

    return (
        <>

        <h1>Задание</h1>
        <PDFViewer
            hideNavbar={true}
            scale={2}
            document={{
                url: '/testtask.pdf',
            }}
        />
        </>
    )
}
