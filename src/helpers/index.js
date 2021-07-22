const getIconComponent = iconName => () => import('@/assets/icons/' + iconName + '.svg')

export { getIconComponent }
