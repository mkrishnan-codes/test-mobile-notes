import  React from 'react';
import { BottomNavigation } from 'react-native-paper';

import Calculator from './Calculator';
import Notes from './Notes';


const Navigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'calculator', title: 'Calculator', icon: 'calculator' },
    { key: 'notes', title: 'Notes', icon: 'notes' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    calculator: Calculator,
    notes: Notes,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navigator;