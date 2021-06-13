import React from 'react'
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps
} from 'react-native-tab-view'
import geom from './geom'
import bridle from './bridle'
import fly from './fly'
import material from './material'
import results from './results'
import { tabstyle } from './style'


type State = NavigationState<{
  key: string;
  title: string;
}>;

export default class MyTabView extends React.Component<
  {},
  State
> {

  state = {
    index: 1,
    routes: [
      { key: 'first', title: 'Shape' },
      { key: 'second', title: 'Bridle' },
      { key: 'third', title: 'Fly' },
      { key: 'fourth', title: 'Material' },
      { key: 'fifth', title: 'Results' },
    ]
  }

  private renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={tabstyle.indicator}
      style={tabstyle.tabbar}
      labelStyle={tabstyle.label}
      tabStyle={tabstyle.tabStyle}
    />
  );

  private renderScene = SceneMap({
    first: geom,
    second: bridle,
    third: fly,
    fourth: material,
    fifth: results
  });

  private handleIndexChange = (index: number) =>
    this.setState({
      index
    });

  render() {
    return (
    <TabView
      navigationState = { this.state }
      renderTabBar = { this.renderTabBar }
      renderScene = { this.renderScene }
      onIndexChange = { this.handleIndexChange }
    />
    )
  }
}