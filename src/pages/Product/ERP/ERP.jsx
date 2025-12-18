import React from "react";
import ERPHERO from "./ERPHERO/ERPHERO";
import ERPSERVICE from "./ERPSERVICE/ERPSERVICE";
import ERPUKBUSINESS from "./ERPUKBUSINESS/ERPUKBUSINESS";
import ERPSOFTWARESERVICE from "./ERPSOFTWARESERVICE/ERPSOFTWARESERVICE";
import ERPIndustries from "./ERPIndustries/ERPIndustries";
import ErpHero2 from "./ERPHERO/ErpHero2";
import ERPSoftwareFeature from "./ERPSoftwareFeature/ERPSoftwareFeature";
import ERPFaq from "./ERPFaq/ERPFaq";


const ERP = () => {
  return (
    <div >
      <ERPHERO/>
      <ERPSERVICE/>
      <ERPUKBUSINESS/>
      <ERPSOFTWARESERVICE/>
      <ERPIndustries/>
      <ErpHero2/>
      <ERPSoftwareFeature/>
      <ERPFaq/>
    </div>
  );
};

export default ERP;
