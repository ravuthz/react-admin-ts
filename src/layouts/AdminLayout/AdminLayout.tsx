import React, {ReactNode, useState} from 'react';
import {Button, ConfigProvider, Dropdown, Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

// import 'moment/locale/km-kh';
// import 'moment/locale/zh-cn';

import enUS from "antd/lib/locale/en_US";
import khKM from 'antd/lib/locale/km_KH';
import zhCN from 'antd/lib/locale/zh_CN';

import './AdminLayout.less';

const {Header, Sider, Content, Footer} = Layout;

export type AdminLayoutProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

const locales: any = {
  en: enUS,
  kh: khKM,
  'zh-cn': zhCN
}

const AdminLayout: React.FC = ({children}: AdminLayoutProps) => {
  const [locale, setLocale] = useState(enUS);

  const [collapsed, setCollapsed] = useState(false);
  const [showSettings, setShowSettings] = useState(true);
  const [showTagsView, setShowTagsView] = useState(false);
  const [showSideBarLogo, setShowSideBarLogo] = useState(true);
  const [toggleFixHeader, setToggleFixHeader] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(collapsed => !collapsed);
  };

  const onMenuChange = ({key}: any) => {
    console.log('value: ', key);
    // @ts-ignore
    locale.locale(key);
    setLocale(locales[key]);
  };

  const langMenus = (
    <Menu>
      <Menu.Item key="en" onClick={onMenuChange}>
        EN
      </Menu.Item>
      <Menu.Item key="kh" onClick={onMenuChange}>
        KH
      </Menu.Item>
      <Menu.Item key="zh-cn" onClick={onMenuChange}>
        CH
      </Menu.Item>
    </Menu>
  );

  return (
    <ConfigProvider direction="ltr" componentSize="middle" locale={zhCN}>
      <Layout className="admin-layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          {showSideBarLogo && (<div className="logo"/>)}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined/>}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined/>}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{padding: 0}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggleCollapse,
            })}

            <div className="right-menu">
              <Button>Hello</Button>

              <Dropdown overlay={langMenus} placement="bottomRight">
                <Button>Lang</Button>
              </Dropdown>
            </div>
          </Header>
          <Content
            className="site-layout-background site-layout-content"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
          <Footer style={{textAlign: 'center'}}>Admin AntDesign React ©2022
            Created by Ravuthz</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default AdminLayout;
