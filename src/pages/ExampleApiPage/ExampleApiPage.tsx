import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStore } from 'effector-react';

import { Box, Link, Typography } from '@mui/material';

import './ExampleApiPage.css';

import LoadExamplePageUseCase from 'useCases/ExampleUseCase/LoadExamplePageUseCase';

import ExampleStore from 'stores/ExampleStore/ExampleStore';

import {
  apiDataTextStyle,
  containerStyle,
  footerStyle,
  headingStyle,
  levvaNameStyle,
  linkStyle,
  pageInfoStyle,
  subtitleStyle,
} from './ExampleApiPage.styles';

export default function ExampleApiPage(): JSX.Element {
  const { t } = useTranslation();

  const { isLoading, title, description } = useStore(ExampleStore);

  React.useEffect(() => {
    LoadExamplePageUseCase.execute();
  }, []);

  return (
    <Box sx={containerStyle}>
      <Box sx={{ textAlign: 'center', zIndex: 2 }}>
        {isLoading ? (
          <Typography variant="h1" sx={headingStyle}>
            {t('example.loading')}
          </Typography>
        ) : (
          <>
            <Typography variant="h1" sx={headingStyle}>
              <Box component="span" sx={levvaNameStyle}>
                levva
              </Box>{' '}
              /desenvolvimento
            </Typography>
            <Box sx={footerStyle}>
              <Typography variant="h2" sx={subtitleStyle}>
                Template Web
              </Typography>
              <Typography variant="h2" sx={pageInfoStyle}>
                {t('example.page-with-api-data-info')}
              </Typography>
              <Link
                href="https://dev.azure.com/levva/levva-Templates/_wiki/wikis/levva-Templates.wiki/1389/Começe-aqui"
                target="_blank"
                sx={linkStyle}
              >
                {t('example.learn-more')}
              </Link>
              <Box sx={{ marginTop: '64px' }}>
                <Typography sx={apiDataTextStyle}>
                  {t('example.title')}: {title} <br />
                  {t('example.description')}: {description}
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
