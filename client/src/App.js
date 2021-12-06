import React, {useState} from 'react';
import PitchDeckView from './PitchDeckView';
import UploadView from './UploadView';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {

  const [file, setFile] = useState({fileName: '', imagePaths: []});
  const [tabIndex, setTabIndex] = useState(1);

  const onFileUploaded = (fileName, imagePaths) => {
    setFile({fileName, imagePaths});
    setTabIndex(0);
  }

  return (
    <div>

      <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
      <TabList>
        <Tab>View</Tab>
        <Tab>Upload</Tab>
      </TabList>

      <TabPanel>
        <PitchDeckView file={file} />
      </TabPanel>
      <TabPanel>
        <UploadView onFileUploaded={onFileUploaded}/>
      </TabPanel>
      </Tabs>  
      
    </div>
  );
}

export default App;
