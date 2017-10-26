import React from 'react';
import { compose, pure, withHandlers, withState } from 'recompose';
import {
  SidebarGroupWrapper,
  SidebarGroupSubitemsWrapper,
  SidebarItem,
  SidebarItemRightPlusIcon,
  SidebarItemRightArrowIcon } from '../ui';

const enhance = compose(
  withState('opened', 'toggleItem', false),
  withHandlers({
    handleClickNavItem: (props: Object) => (action: string) => {
      props.handleClickNavItem(action);
    },
    handleToggleItem: (props: Object) => () => {
      props.toggleItem(!props.opened);
    },
    handleClickPlusIcon: (props: Object) => (item: Object) => {
      props.handleClickPlusIcon({...item});
    },
  }),
  pure,
);

export const SidebarItemComponent = (props: Object) => {
  const subitems = props.subitems;

  const renderRightIcon = (subitemsLength: number, props: Object, item: Object) => {
    if (subitemsLength) {
      return <SidebarItemRightArrowIcon opened={props.opened} />;
    }
    return (
      <SidebarItemRightPlusIcon
        onClick={(event: Object) => {
          event.stopPropagation();
          props.handleClickPlusIcon(item);
        }} />
    );
  };

  if (subitems.length) {
    return (
      <SidebarGroupWrapper opened={props.opened}>
        <SidebarItem
          lightLink={props.lightLink}
          darkLink={props.darkLink}
          currentTheme={props.currentTheme}
          opened={props.opened}
          onClick={() => props.handleToggleItem()}
        >
          {props.title}
          {renderRightIcon(props.subitems.length, props)}
        </SidebarItem>
        { props.opened &&
          <SidebarGroupSubitemsWrapper>
            {
              subitems.map((item: Object) => (
                <SidebarItem
                  key={item.title}
                  lightLink={item.lightLink}
                  darkLink={item.darkLink}
                  title={item.title}
                  subitems={item.subitems}
                  currentTheme={props.currentTheme}
                  onClick={() => props.handleClickNavItem(item.action)}
                >
                  {item.title}
                  {renderRightIcon(item.subitems.length, props, item)}
                </SidebarItem>
              ))
            }
          </SidebarGroupSubitemsWrapper>
        }
      </SidebarGroupWrapper>
    );
  }

  return (
    <SidebarItem
      lightLink={props.lightLink}
      darkLink={props.darkLink}
      currentTheme={props.currentTheme}
    >
      {props.title}
    </SidebarItem>
  );
};

export default enhance(SidebarItemComponent);
