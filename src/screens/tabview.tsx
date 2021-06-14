import React from 'react'
import {
  TabView,
  TabBar,
  NavigationState,
} from 'react-native-tab-view'
import { Text, SafeAreaView} from 'react-native'
import Geom from './geom'
import Bridle from './bridle'
import Fly from './fly'
import Material from './material'
import Results from './results'
import { tabstyle } from './style'


type State = NavigationState<{
  key: string;
  title: string;
}>;


export default class MyTabView extends React.Component<
  any,
  State
> {

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Shape' },
      { key: 'second', title: 'Bridle' },
      { key: 'third', title: 'Fly' },
      { key: 'fourth', title: 'Material' },
      { key: 'fifth', title: 'Results' },
    ]
  }


  private renderScene = ( { route }: any) => {
    switch (route.key) {
      case 'first':
        return <Geom data={this.props.data.geom} setters={this.props.setters}/>;
      case 'second':
        return <Bridle data={this.props.data.bridle} setters={this.props.setters}/>;
      case 'third':
        return <Fly data={this.props.data.fly} setters={this.props.setters}/>;
      case 'fourth':
        return <Material data={this.props.data.material} setters={this.props.setters}/>;
      case 'fifth':
        return <Results data={this.props.data}/>;
      default:
        return null;
    }
  }

  private renderTabBar = (
    props: any // SceneRendererProps & { navigationState: State }
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

  private handleIndexChange = (index: number) =>
    this.setState({
      index
    });

  render() {
    return (
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
        />
    )
  }
}