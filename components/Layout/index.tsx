import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, Divider, Input, Layout as LayoutComp } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import { siteConfig, useCurrentLanguage } from '../../utils';
import Container from '../Container';
import SelectLanguage from '../SelectLanguage';

import './index.less';

interface LayoutProps {
  children?: any;
  title?: string;
  titleTrailing?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title = '',
  titleTrailing = ` - ${siteConfig.title}`,
}) => {
  const { currentLanguage } = useCurrentLanguage();
  const router = useRouter();
  const user: any = null;

  console.log(currentLanguage);

  return (
    <>
      <Head>
        <title>{`${title}${titleTrailing}`}</title>
      </Head>
      <LayoutComp
        className={classNames(['layout', currentLanguage.dir])}
        dir={currentLanguage.dir}
      >
        <LayoutComp.Header>
          <Container fluid>
            <Link href="/">
              <div className="brand">
                <img src="/images/logo.png" alt={`${title}${titleTrailing}`} />
              </div>
            </Link>
            <div style={{ width: '64px' }} />
            <Input.Search
              placeholder="Search or jump to..."
              onSearch={(value) => console.log(value)}
              style={{ width: '280px' }}
            />
            <div style={{ flex: 1 }} />
            {!user && (
              <>
                <SelectLanguage />
                <Divider
                  type="vertical"
                  style={{
                    marginLeft: '24px',
                    marginRight: '24px',
                    height: '32px',
                  }}
                />
                <Button type="primary">
                  <a
                    target="__blank"
                    href="https://github.com/blankapp/flutter-widget-livebook"
                  >
                    GitHub
                  </a>
                </Button>
              </>
            )}
          </Container>
        </LayoutComp.Header>
        <LayoutComp.Content>{children}</LayoutComp.Content>
        <LayoutComp.Footer>
          <Divider style={{ margin: 0 }} />
          <Container
            fluid
            style={{ paddingTop: '20px', paddingBottom: '20px' }}
          >
            <div>©2020 LIJIANYING</div>
            <div style={{ flex: 1 }} />
            <div>
              <a href="https://github.com/blankapp/flutter-widget-livebook">
                <GithubOutlined />
              </a>
            </div>
          </Container>
        </LayoutComp.Footer>
      </LayoutComp>
    </>
  );
};

export default Layout;
