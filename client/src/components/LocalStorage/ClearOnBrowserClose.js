// import { useEffect } from 'react';
// import { clearTokenOnBrowserClose } from '../../services/storage/indexedDB';


const ClearOnBrowserClose = () => {

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     // Perform your desired action here
  //     // For example, showing a confirmation message to the user
  //     // clearTokenOnBrowserClose();
  //     event.preventDefault();
  //     event.returnValue = ''; // Needed for some browsers to show a custom message
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     // Clean up the event listener when the component is unmounted
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  return null;
}

export default ClearOnBrowserClose;


