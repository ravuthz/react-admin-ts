import {ConfigProvider} from "antd";
import React, {useState} from "react";

import enUS from "antd/lib/locale/en_US";
// import khKM from 'antd/lib/locale/km_KH';

// import 'moment/locale/km-kh';
// moment.locale('en');

const AppProvider = ({children}: any) => {
  const [locale, setLocale] = useState(enUS);

  return (
    <ConfigProvider direction="ltr" componentSize="middle" locale={locale}>
      {children}
    </ConfigProvider>
  );
};

export default AppProvider;
