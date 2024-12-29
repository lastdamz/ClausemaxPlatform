import React, { useState } from 'react';
import { About, FAQ, Hero, Services } from "../components";
import { faqData } from "../constants/data";

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const renderComponents = () => {
    const components = [
      { name: 'About', component: <About /> },
      { name: 'Services', component: <Services /> },
      { name: 'FAQ', component: <FAQ data={faqData} /> },
    ];

    // Filter components based on search query
    return components
      .filter(comp => 
        searchQuery === '' || comp.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((comp, index) => <div key={index}>{comp.component}</div>);
  };

  return (
    <div className='space-y-4 flex flex-col'>
      <Hero onSearch={handleSearch} />
      <div className='md:p-8 space-y-16'>
        {renderComponents()}
      </div>
    </div>
  );
}

export default Home;