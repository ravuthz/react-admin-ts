import { ConfigProvider } from 'antd';
import React, { createContext, useContext, useState } from 'react';

import enUS from 'antd/lib/locale/en_US';
// import khKM from 'antd/lib/locale/km_KH';

// import 'moment/locale/km-kh';
// moment.locale('en');

// ConfigProvider.config({
//   prefixCls: 'custom',
//   theme: {
//     primaryColor: 'red',
//   },
// });

const ThemeContext = createContext({}); // ConfigProvider.ConfigContext;

ThemeContext.displayName = "ThemeContext";

const ThemeProvider: React.FC<any> = ({ children }: any) => {
  // const hasState = useCallback(() => state !== undefined, [state]);
  // const clearState = useCallback(() => setState((s: any) => s = undefined), []);

  const [showSettings, setShowSettings] = useState(true);
  const [showTagsView, setShowTagsView] = useState(false);
  const [showSideBarLogo, setShowSideBarLogo] = useState(false);
  const [toggleFixHeader, setToggleFixHeader] = useState(false);

  const value = {
    showSettings, setShowSettings,
    showTagsView, setShowTagsView,
    showSideBarLogo, setShowSideBarLogo,
    toggleFixHeader, setToggleFixHeader
  };

  return (
    <ThemeContext.Provider value={value}>
      {/* prefixCls="custom" */}
      <ConfigProvider  direction="rtl" componentSize="middle" locale={enUS}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

const useThemeCtx: any = () => useContext(ThemeContext);

export {
  ThemeProvider,
  ThemeContext,
  useThemeCtx
};
