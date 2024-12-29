import React from 'react';
import { FAQ } from '../components';
import { Accounting, Development, Statutory, TaxAdmin, VirtualFiscalisation, Zimra } from "../components/OfferedServices";
import { useLocation } from "react-router-dom";
import { faqData, faqTaxdata, faqVFdata, faqERPs } from '../constants/data';

function ServiceInfo() {
  const location = useLocation();
 const state = location.state.state;

// Mapping of states to their corresponding components
 const servicesMap = {
    virtual: <VirtualFiscalisation />,
    tax: <TaxAdmin />,
    accounting: <Accounting />,
    zimra: <Zimra />,
    statutory: <Statutory />,
    development: <Development />
 };

 // Mapping of states to their corresponding FAQ data
 const faqMap = {
   virtual: faqVFdata, 
   tax: faqTaxdata,
   accounting: faqData,
   zimra: faqERPs,
   statutory: faqData,
   development: faqData
 };

 return (
 <div className='flex flex-col gap-20'>
     {servicesMap[state]}
        {(state === 'virtual' || state === 'tax' || state === 'accounting' || state === 'zimra') && (
            <div className='flex justify-center items-center p-4'>
                     <FAQ data={faqMap[state]} />
             </div>
        )}
  </div>
 );
}

export default ServiceInfo;