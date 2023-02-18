import React from 'react';
import EditorPage from 'pages/Editor';
import PageContainer from 'components/PageContainer';

const Editor = (props) => (
  <PageContainer>
    <EditorPage {...props} />
  </PageContainer>
);

export default Editor;
