import * as React from 'react';
import { Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import { StatusBar } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="default"
      />
      <Header />
      <Home />
      <Footer />
    </>
  );
}