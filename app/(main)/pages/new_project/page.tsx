import React from 'react';
import VideoEditor from '../../uikit/video_editor/page'

const NewProject = () => {
    return (
        <div className="grid editor-layout">
            <div className="col-12">
                {/* <div className="card">
                    <h5>New Project</h5>
                    <p>Create you new project here..!</p>
                </div> */}
                <VideoEditor/>
            </div>
        </div>
    );
};

export default NewProject;
