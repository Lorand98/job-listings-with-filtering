import React, { ReactNode, useState } from 'react';
import { IJobs } from '../types';
import { jobs } from '../constants';

export const JobContext = React.createContext<{ jobs: IJobs[] }>({
  jobs,
});

const JobContextProvider = ({ children }: { children: ReactNode }) => {
  const jobList = useState(jobs)[0];
  return (
    <JobContext.Provider value={{ jobs: jobList }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
