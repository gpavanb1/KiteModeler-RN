import * as React from 'react'
import { View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import geom from './geom'
import bridle from './bridle'
import fly from './fly'
import material from './material'


export function MyTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Shape' },
    { key: 'second', title: 'Bridle' },
    { key: 'third', title: 'Fly' },
    { key: 'fourth', title: 'Material' },
  ]);

  const renderScene = SceneMap({
    first: geom,
    second: bridle,
    third: fly,
    fourth: material
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}