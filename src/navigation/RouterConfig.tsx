import React from 'react';
import AboutPage from 'pages/about/AboutPage';
import HomePage from 'pages/home/HomePage';
import { Routes, Route } from 'react-router-dom';
import { ABOUT_PATH, PROFILE_PATH, ROOT } from './CONSTANT';
import NotFound from 'pages/error/NotFound';
import Profile from 'pages/profile/Profile';

interface Props {}

const RouterConfig = (props: Props) => {
  return (
    <Routes>
      {/* List all public routes here */}
      <Route path={ROOT} element={<HomePage />} />
      <Route path={ABOUT_PATH} element={<AboutPage />} />
      <Route path={`${PROFILE_PATH}/:username`} element={<Profile />} />

      {/* List all private/auth routes here */}

      {/* List a generic 404-Not Found route here */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterConfig;
